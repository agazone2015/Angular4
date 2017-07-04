import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-playlists-list',
  template: `
    <div class="list-group">
      <div class="list-group-item" [class.active]="selected" (click)=" selected = !selected ">Test</div>
    </div>
  `,
  styles: [

  ]
})
export class PlaylistsListComponent implements OnInit {

  selected = true;

  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
