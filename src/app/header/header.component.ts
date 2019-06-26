import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() optionClicked = new EventEmitter<{optionClicked: string}>();

  onClicked(event: MouseEvent) {
    this.optionClicked.emit({optionClicked: event.target.innerText});
  }

  ngOnInit(): void {
  }

}
