import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>()
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Ahi Tuna Medallion', 
  //     'Delicous Mediterran Ahi Tuna', 
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [
  //       new Ingredient('Ahi Tuna', 16),
  //       new Ingredient('Fresh Herbs', 2)
  //     ]),
  //   new Recipe('Baked Salmon', 'Delicous Baked Salmon', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg', [
  //     new Ingredient('Wild Salmon', 8),
  //     new Ingredient('Blackend', 2)
  //   ])
  // ]
  private recipes: Recipe[] = []
  constructor(private slService:ShoppingListService) {}
  getRecipes():Recipe[] {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id]
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
    this.recipesChanged.next(this.recipes.slice())

  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe
    this.recipesChanged.next(this.recipes.slice())

  }

  deleteRecipe(index: number) {
    console.log('deleted recipe', index)
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice())
  }
}