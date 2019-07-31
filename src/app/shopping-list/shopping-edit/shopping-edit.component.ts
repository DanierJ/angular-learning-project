import {
  Component, OnDestroy,
  OnInit,
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
  editMode = false;
  editedItemIndex: number;
  startedEditingSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
   this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
        (id: number) => {
          this.editedItemIndex = id;
          this.editMode = true;
        }
      );
  }

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

  ngOnDestroy(): void {
    this.startedEditingSubscription.unsubscribe();
  }
}
