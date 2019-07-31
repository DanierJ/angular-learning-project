import {
  Component,
  OnInit,
} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})

export class ShoppingEditComponent implements OnInit {

//  @Output() ingredientData = new EventEmitter<{name: string, amount: number}>();

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient(form: NgForm) {
    const formValue = form.value;
    this.shoppingListService.addIngredient(new Ingredient(formValue.name, formValue.amount));
    form.reset();
  //  this.clearInput();
  }

  private clearInput(): void {
   /* this.amountIngredient.nativeElement.value = '';
    this.nameIngredient.nativeElement.value = '';*/
  }

  ngOnInit(): void {
  }

}
