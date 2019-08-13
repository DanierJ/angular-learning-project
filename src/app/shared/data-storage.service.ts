import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const params = new HttpParams().set('auth', this.authService.getToken());
    return this.http
      .put('https://ng-recipe-book-8881f.firebaseio.com/recipes.json',
        this.recipeService.getRecipes(),
        {
          params
        });
  }

  fetchRecipes() {
    const params = new HttpParams().set('auth', this.authService.getToken());
    return this.http.get<Recipe[]>('https://ng-recipe-book-8881f.firebaseio.com/recipes.json', {params})
      .pipe(
        map(recipes => {
          for (const recipe of recipes) {
              if (!recipe.ingredients) {
                recipe.ingredients = [];
              }
          }
          return recipes;
        })
      )
      .subscribe(
      (response) => {
        this.recipeService.setRecipes(response);
      }
    );
  }
}
