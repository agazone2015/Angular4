import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService } from './playlists.service'

@Component({
  selector: 'sg-playlist-container',
  template: `
    <sg-playlist-details [playlist]="playlist$ | async" (save)="save($event)"></sg-playlist-details>
  `,
  styles: []
})
export class PlaylistContainerComponent implements OnInit {

  playlist$;

  constructor(private route: ActivatedRoute, private service: PlaylistsService, private router: Router) {
    //console.log(route.snapshot.params['id'])

    //get id param from url
    /////////////let id = route.snapshot.params['id']
    // get playlist by id

    //route.params.subscribe( params => {this.playlist = this.service.getPlaylist(params['id']) 
    // lub
    this.playlist$ = route.params
      .pluck('id')
      .map(id => this.service.getPlaylist(id))
  }
  save(playlist) {

    //zapisz playlist
    this.service.savePlaylist(playlist);

    //wybierz nowa zmieniona playlist
    this.router.navigate(['playlists', playlist.id])
  }
  ngOnInit() {
  }
}







