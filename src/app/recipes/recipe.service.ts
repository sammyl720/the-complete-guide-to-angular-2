import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe(
      'Ahi Tuna Medallion', 
      'Delicous Mediterran Ahi Tuna', 
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Ahi Tuna', 16),
        new Ingredient('Fresh Herbs', 2)
      ]),
    new Recipe('Baked Salmon', 'Delicous Baked Salmon', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg', [
      new Ingredient('Wild Salmon', 8),
      new Ingredient('Blackend', 2)
    ])
  ]
  constructor(private slService:ShoppingListService) {}
  getRecipes():Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id]
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}