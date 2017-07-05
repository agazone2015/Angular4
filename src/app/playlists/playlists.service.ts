import { Injectable } from '@angular/core';
import {Playlist} from './interfaces';

@Injectable()
export class PlaylistsService {


  playlists:Playlist[] = [
      {
        id: 1, name: 'The best of Angular', color: '#ff0000', favourite: false
      },
      {
        id: 2, name: 'The Angular', color: '#00ff00', favourite: false
      },
      {
        id: 3, name: 'The best of WebDev', color: '#0000ff', favourite: false
      }
    ]

    getPlaylists() {
      return this.playlists;
    }

    savePlaylist(playlist) {
      //debugger
      if(playlist.id){
        //update
        const index = this.playlists.findIndex( ({id}) => playlist.id == id )
        this.playlists.splice(index, 1, playlist)
      } else {
        playlist.id = Date.now()
        this.playlists.push(playlist)
      }
    }

  constructor() { 
  
  }

}
