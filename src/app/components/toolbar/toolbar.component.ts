import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrl: 'toolbar.component.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ToolbarComponent{
  
  @Input() title!: string;
  @Input() loggedUser!: string;
  
  showMenu(){

  }
}