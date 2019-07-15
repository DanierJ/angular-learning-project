import {Component, Input} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})


export class RecipeDetailComponent {
  @Input() recipeDetail: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  addToShoppingList() {
   this.recipeDetail.ingredients.map((
     ingredient) => {
     this.shoppingListService.addIngredient(new Ingredient(ingredient.name, ingredient.amount));
   });
  }

}
