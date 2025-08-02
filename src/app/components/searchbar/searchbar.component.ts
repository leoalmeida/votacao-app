import {Component,output} from '@angular/core';

/**
 * @title Search bar overview
 */
@Component({
  selector: 'app-searchbar',
  templateUrl: 'searchbar.component.html',
  styleUrl: 'searchbar.component.css',
})
export class SearchbarComponent{
  messageEvent = output<string>();
  
  clear(){
    this.messageEvent.emit("");
  }

  onSearchUpdated(sq: string) {
    this.messageEvent.emit(sq);
  }
}