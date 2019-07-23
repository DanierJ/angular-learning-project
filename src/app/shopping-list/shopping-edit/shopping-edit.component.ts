import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})

export class ShoppingEditComponent implements OnInit {

//  @Output() ingredientData = new EventEmitter<{name: string, amount: number}>();

  constructor(private shoppingListService: ShoppingListService) {}


  @ViewChild('nameInput', {static: false}) nameIngredient: ElementRef;
  @ViewChild('amountInput', {static: false}) amountIngredient: ElementRef;

  onAddIngredient() {
    const ingName = this.nameIngredient.nativeElement.value;
    const ingAmount = this.amountIngredient.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(ingName, ingAmount));
    this.clearInput();
  }

  private clearInput(): void {
    this.amountIngredient.nativeElement.value = '';
    this.nameIngredient.nativeElement.value = '';
  }

  ngOnInit(): void {
  }

}
