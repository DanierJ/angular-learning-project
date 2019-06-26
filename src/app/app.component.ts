import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-project';
  option = '';

  onClicked(optionClick: {optionClicked: string}) {
    this.option = optionClick.optionClicked;
  }
}
