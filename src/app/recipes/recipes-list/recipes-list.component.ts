import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: 'recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'),
    new Recipe('Another Test Recipe', 'This is another test', 'https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
