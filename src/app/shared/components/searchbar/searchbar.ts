import {Component,output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: false,
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css'
})
export class Searchbar {
 messageEvent = output<string>();

  clear(){
    this.messageEvent.emit("");
  }

  onSearchUpdated(sq: string) {
    this.messageEvent.emit(sq);
  }
}
