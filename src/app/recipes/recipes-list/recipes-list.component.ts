import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: 'recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipesSub: Subscription;
  
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.recipesSub.unsubscribe();
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipesSub = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
  }
}
