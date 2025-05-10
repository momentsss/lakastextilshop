import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() selectedPage = new EventEmitter<string>();

  menuSwitch(value: string) {
    this.selectedPage.emit(value);
  }
}