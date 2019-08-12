import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from "../recipes/recipe.model";
import {map} from "rxjs/operators";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('', this.recipeService.getRecipes());
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('')
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
