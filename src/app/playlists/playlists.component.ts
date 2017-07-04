import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-playlists',
  template: `
    <div class="row">
      <div class="col">
        <sg-playlists-list></sg-playlists-list>
      </div>
        <div class="col">
          <sg-playlist-details></sg-playlist-details>
      </div>
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
