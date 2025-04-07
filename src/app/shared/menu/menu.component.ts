import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent{

  @Output() selectedPage = new EventEmitter<string>();

  menuSwitch(value: string) {
    console.log('MenuComponent: Kiválasztott érték:', value); 
    if (value) { 
        this.selectedPage.emit(value);
        console.log('MenuComponent: selectedPage esemény elküldve.'); 
    }
  }
}
