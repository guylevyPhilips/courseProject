import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient [] = [];
  private ingredientsChagedSub!: Subscription;

  constructor(private slService: ShoppingListService, private logginService: LoggingService) { }

  ngOnDestroy(): void {
    this.ingredientsChagedSub.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.ingredientsChagedSub = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;      
    });
    this.logginService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }
}
