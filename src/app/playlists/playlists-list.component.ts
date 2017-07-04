import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-playlists-list',
  template: `
    <div class="list-group">
      <div class="list-group-item">{{message}}</div>
      <div class="list-group-item">{{data.name}}</div>
      <div class="list-group-item">{{counter % 2 == 0?'even' : 'odd'}}</div>
      <div class="list-group-item" [style.borderColor] = "counter % 2 == 0? 'blue' : data.color">Test</div>
      <div class="list-group-item">Test</div>
      <div class="list-group-item">Test</div>
      <div class="list-group-item">Test</div>
      <div class="list-group-item">Test</div>
    </div>
  `,
  styles: [`
    :host {
      border: 1px solid black;
      display: block;
    }

    :host >>> p {
      color: blue;
    }

    p {
      color: red;
    }
  `]
})
export class PlaylistsListComponent implements OnInit {

  message = 'Wiadomosc'

  data =  {
    name: 'Alice',
    color: "red"
  }

  counter = 0

  constructor() { 
    
  }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 2500)
  }

}
