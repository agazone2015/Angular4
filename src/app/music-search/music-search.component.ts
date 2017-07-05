import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Album } from './inerfaces'


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

  constructor(private http: Http) {
    var match = window.location.hash.match(/#access_token=(.*?)&/)
    var token = match && match[1]
    console.log(token)

    var query = 'batman'

    //jQuery.get('...').then(response)
    this.http.get(`https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`, {
      headers: new Headers({
        'Authorization': `Bearer ${token}`
      })
    }).subscribe(response => {
      this.albums = response.json().albums.items;
    })
  }

  ngOnInit() {
  }

}
