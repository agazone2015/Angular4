import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {PlaylistsService } from './playlists.service'

@Component({
  selector: 'sg-playlist-container',
  template: `
    <sg-playlist-details [playlist]="playlist"></sg-playlist-details>
  `,
  styles: []
})
export class PlaylistContainerComponent implements OnInit {

  playlist;

  constructor(private route: ActivatedRoute, private service: PlaylistsService ) {
    //console.log(route.snapshot.params['id'])

    //get id param from url
    let id = route.snapshot.params['id']
    // get playlist by id
    this.playlist = this.service.getPlaylist(id) 
   }

  ngOnInit() {
  }

}
