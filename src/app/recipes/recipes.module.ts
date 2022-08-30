import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { NoRecipeSelectedComponent } from "./no-recipe-selected/no-recipe-selected.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesListItemComponent } from "./recipes-list/recipes-list-item/recipes-list-item.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipesListItemComponent,
        RecipeDetailsComponent,
        NoRecipeSelectedComponent,
        RecipeEditComponent,
    ],
    imports: [
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {

}