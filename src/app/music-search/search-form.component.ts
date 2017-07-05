import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

@Component({
  selector: 'sg-search-form',
  template: `
    <input (keyup)="search($event.target.value)">
  `,
  styles: []
})
export class SearchFormComponent implements OnInit {

  constructor(private service:MusicService) { }

  search(query) {
    this.service.search(query)
  }

  ngOnInit() {
  }

}
