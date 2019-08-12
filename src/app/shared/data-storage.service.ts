import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('', this.recipeService.getRecipes());
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('').subscribe(
      (response) => {
        this.recipeService.setRecipes(response);
      }
    );
  }
}
