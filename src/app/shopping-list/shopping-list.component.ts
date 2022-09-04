import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Observable<{ingredients: Ingredient[]}>;

  constructor(private slService: ShoppingListService, private logginService: LoggingService, private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');

    this.logginService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }
}
