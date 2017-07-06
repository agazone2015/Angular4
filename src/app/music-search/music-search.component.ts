import { Component, OnInit } from '@angular/core';
import { Album } from './interfaces';
import { MusicService } from './music.service'


@Component({
  selector: 'sg-music-search',
  template: `
   <div class="row">
      <div class="col">
        <sg-search-form></sg-search-form>
        <button (click)="authorise()">Zaloguj</button>
      </div>
   </div>

   <div class="row">
      <div class="col">
        <sg-album-list [albums]="albums"></sg-album-list>
      </div>
   </div>
  `,
  styles: []
})


export class MusicSearchComponent implements OnInit {
  authorise() {
    let client_id = "708ac681205a45a5b91d82112ea67d80";

    window.location.replace('https://accounts.spotify.com/authorize?client_id=708ac681205a45a5b91d82112ea67d80&redirect_uri=http://localhost:4200/&response_type=token')
  }

  albums:Album[] = []

  constructor(private service:MusicService){
    //this.service.search('alice')
    this.service.getAlbums$().subscribe(albums => this.albums = albums)
  }

  ngOnInit() {
  }

}
