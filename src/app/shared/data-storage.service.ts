import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService{
  url = 'https://ng-course-recipe-book-f90a0.firebaseio.com/'
  constructor(private http:HttpClient, private recipeService: RecipeService, private authService: AuthService){

  }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes()

    this.http.put<any>(this.url + 'recipes.json', recipes ).subscribe(response => {
      console.log(response)
    })
  }

  fetchRecipes(): Observable<Recipe[]>{
    
      return this.http.get<Recipe[]>(this.url + 'recipes.json').pipe(map(recipes => {
      return recipes.map(recipe => {

        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []}
      })
    }),
    tap(recipes => {
      this.recipeService.setRecipes(recipes)
    }))
  }

}