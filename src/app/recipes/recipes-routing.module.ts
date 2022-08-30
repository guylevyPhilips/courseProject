import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { NoRecipeSelectedComponent } from "./no-recipe-selected/no-recipe-selected.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";

const routes: Routes = [
    {path: '', component: RecipesComponent, canActivate: [AuthGuard], children: [        
        {path: '', component: NoRecipeSelectedComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailsComponent, resolve: [RecipesResolverService]},
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
    ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipesRoutingModule{

}