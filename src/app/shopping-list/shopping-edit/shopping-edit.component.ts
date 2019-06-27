import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  @Output() ingredientData = new EventEmitter<{name: string, amount: number}>();


  @ViewChild('nameInput', {static: false}) nameIngredient: ElementRef;
  @ViewChild('amountInput', {static: false}) amountIngredient: ElementRef;

  onAddIngredient() {

    this.ingredientData.emit({name: this.nameIngredient.nativeElement.value, amount: this.amountIngredient.nativeElement.value});
    this.clearInput();
  }

  private clearInput(): void {
    this.amountIngredient.nativeElement.value = '';
    this.nameIngredient.nativeElement.value = '';
  }

  ngOnInit(): void {
  }

}
