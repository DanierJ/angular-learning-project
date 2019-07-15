import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
      this.ingredients.push(newIngredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }

}
