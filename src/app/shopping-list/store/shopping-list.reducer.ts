import { Action } from "@ngrx/store";
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

const initialState = {
    ingredients : [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)]
};

export function shoppingListReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, ingredients: [...state.ingredients, (action as ShoppingListActions.AddIngredient).payload]
            };
            case ShoppingListActions.ADD_INGREDIENTS:
                return {
                    ...state, ingredients: [...state.ingredients, ...(action as ShoppingListActions.AddIngredients).payload]
                };
            case ShoppingListActions.UPDATE_INGREDIENT:
                let currAction = action  as ShoppingListActions.UpdateIngredient;
                const ingredient = state.ingredients[currAction.payload.index];
                const updateIngredient = {
                    ...ingredient, ...currAction.payload.ingredient
                };
                const updatedIngredients = [...state.ingredients];
                updatedIngredients[currAction.payload.index] = updateIngredient;
                
                return{
                    ...state, ingredients: updatedIngredients
                };
            case ShoppingListActions.DELETE_INGREDIENT:
                return {

                };
            default:
                return state;
    }
}