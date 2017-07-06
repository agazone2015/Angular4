import { Injectable } from '@angular/core';
import {Playlist} from './interfaces';
import { Http } from '@angular/http';

//@Injectable() lets Angular know that a class can be used with the dependency injector.
@Injectable()
export class PlaylistsService {
// which will be playlists: type of PlaylistsArray with playlists items
  playlists:Playlist[] = [
      { id: 1, name: 'The best of Angular', color: '#ff0000', favourite: false },
      { id: 2, name: 'The Angular', color: '#00ff00', favourite: false },
      { id: 3, name: 'The best of WebDev', color: '#0000ff', favourite: false }
    ]

    getPlaylists() {
      return this.http.get('http://localhost:3000/playlists')
      .map(response => response.json())
    }

    getPlaylist(id) {
      return this.playlists.find( (playlist) => playlist.id == id ) ;
    }

    url = 'http://localhost:3000/playlists/'

    savePlaylist(playlist) {
      //debugger
      if(playlist.id){

        this.http.put( this.url + playlist.id, playlist).subscribe(response => {

        })
        //update
        // find index and (in the function replace this index with playlist.id) 
        //const index = this.playlists.findIndex( ({id}) => playlist.id == id ) 
        // this.playlist.splice(index, od 1, zamien playliste)
        //this.playlists.splice(index, 1, playlist) 
      } else {
        this.http.post(this.url, playlist).subscribe(response => {
          
        })
        //playlist.id = Date.now()
        //this.playlists.push(playlist)
      }
    }

  constructor(private http:Http) { 

  }

}
