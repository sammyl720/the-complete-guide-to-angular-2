import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const routes: Route[] = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: '/recipes'
  },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: "new",
        component: RecipeEditComponent
      },
      {
        path: ":id",
        component: RecipeDetailComponent
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: "shopping-list",
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
