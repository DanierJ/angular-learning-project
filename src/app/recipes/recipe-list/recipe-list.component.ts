import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is just a test', ''),
    new Recipe('Another test recipe', 'This is another test', '')
  ];
 @Output() recipeDetail = new EventEmitter<Recipe>();

  constructor() {

  }

  ngOnInit(): void {
  }

  emitDetail(recipeDetail: Recipe) {
    this.recipeDetail.emit(recipeDetail);
  }

}
