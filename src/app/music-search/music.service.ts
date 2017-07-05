import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Album} from './inerfaces'

//import 'rxjs/Rx
import {Observable, Subject, BehaviorSubject} from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs'


@Injectable()
export class MusicService {

  constructor( private http:Http) {}

  albums:Album[] =[]

  albums$ = new Subject<Album[]>();

  getAlbums$() {
    return this.albums$.asObservable()
  }

  search(query = 'batman'){

    var match = window.location.hash.match(/#access_token=(.*?)&/)
    var token = match && match[1]
    console.log(token)

    //jQuery.get('...').then(response)
    this.http.get(`https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`, {
      headers: new Headers({
        'Authorization': `Bearer ${token}`
      })
    })
    .map( response => <Album[]> response.json().albums.items)
    .subscribe(albums => {
      this.albums = albums;
      this.albums$.next(albums)
    })
  }
}
