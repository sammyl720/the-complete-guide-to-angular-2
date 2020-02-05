import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Second Test Recipe', 'This is simply a delicous recipe', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
