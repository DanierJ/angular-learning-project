import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';




const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
