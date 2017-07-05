import { Component, OnInit } from '@angular/core';
import { Playlist } from './interfaces'

import { PlaylistsService } from './playlists.service'

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
          [playlist]='selectedPlaylist'
          (save) = 'save($event)'></sg-playlist-details>
      </div>
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  selectedPlaylist;

    playlists:Playlist[] = []

    save(playlist){
      this.service.savePlaylist(playlist); 
      this.selectedPlaylist = playlist 
    }

    constructor(private service:PlaylistsService) {
      // this.selectedPlaylist = this.playlists[2]

      // const service = new PlaylistsService()
      this.playlists = service.getPlaylists()
      this.selectedPlaylist = this.playlists[2]
     }


  ngOnInit() {
  }

}
