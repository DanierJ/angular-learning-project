import {Recipe} from './recipe.model';

export class  RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test', ''),
    new Recipe('Another test recipe', 'This is another test', '')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // Exact copy of the array
  }
}
