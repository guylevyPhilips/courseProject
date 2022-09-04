import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: any;
  id!: number

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private shopLstSrvcs: ShoppingListService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipes()[params['id']];
        this.id = +params['id'];
      }
    )
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id);
  }

  sendIngredientToShoppingList(){
    let ingredients = this.recipeService.getRecipe(this.id).ingredients;
    // for (let ingredient of ingredients){
    //   this.shopLstSrvcs.addIngredients(ingredient)
    // }
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }
}
