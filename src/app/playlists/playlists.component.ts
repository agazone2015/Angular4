import { Component, OnInit } from '@angular/core';
import {Playlist} from './interfaces'

@Component({
  selector: 'sg-playlists',
  template: `
    <div class="row">
      <div class="col">
        <sg-playlists-list 
        (select)="selectedPlaylist = $event"
        [playlists]='playlists'
        [selected]='selectedPlaylist'></sg-playlists-list>
      </div>
        <div class="col">
          <sg-playlist-details *ngIf='selectedPlaylist'
          [playlist]='selectedPlaylist'></sg-playlist-details>
      </div>
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  selectedPlaylist;

    playlists:Playlist[] = [
      {
        id: 1, name: 'The best of Angular', color: '#ff0000', favourite: false
      },
      {
        id: 1, name: 'The Angular', color: '#00ff00', favourite: false
      },
      {
        id: 1, name: 'The best of WebDev', color: '#0000ff', favourite: false
      }
    ]

    constructor() {
      this.selectedPlaylist = this.playlists[2]
     }


  ngOnInit() {
  }

}
