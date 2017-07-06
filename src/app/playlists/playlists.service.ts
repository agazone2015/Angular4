import { Injectable } from '@angular/core';
import {Playlist} from './interfaces';

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
      return this.playlists;
    }

    getPlaylist(id) {
      return this.playlists.find( (playlist) => playlist.id == id ) ;
    }

    savePlaylist(playlist) {
      //debugger
      if(playlist.id){
        //update
        // find index and (in the function replace this index with playlist.id) 
        const index = this.playlists.findIndex( ({id}) => playlist.id == id ) 
        // this.playlist.splice(index, od 1, zamien playliste)
        this.playlists.splice(index, 1, playlist) 
      } else {
        playlist.id = Date.now()
        this.playlists.push(playlist)
      }
    }

  constructor() { 
  }

}
