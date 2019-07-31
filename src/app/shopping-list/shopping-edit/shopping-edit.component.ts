/* tslint:disable:object-literal-key-quotes */
import {
  Component, OnDestroy,
  OnInit, ViewChild,
} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: false}) shoppingListForm: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  startedEditingSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
   this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
        (id: number) => {
          this.editedItemIndex = id;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredientById(id);
          this.shoppingListForm.setValue({
            'name': this.editedItem.name,
            'amount': this.editedItem.amount
          });
        }
      );
  }

  onAddIngredient(form: NgForm) {
    const formValue = form.value;
    const newIngredient = new Ingredient(formValue.name, formValue.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  //  this.clearInput();
  }

  private clearInput(): void {
   /* this.amountIngredient.nativeElement.value = '';
    this.nameIngredient.nativeElement.value = '';*/
  }

  ngOnDestroy(): void {
    this.startedEditingSubscription.unsubscribe();
  }
}
