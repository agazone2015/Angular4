import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Album } from './interfaces'

//import 'rxjs/Rx'
import { Observable, Subject, BehaviorSubject } from 'rxjs'
import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/filter'

@Injectable()
export class MusicService {

  albums$ = new BehaviorSubject<Album[]>([]);

  queries$ = new Subject<string>();



  constructor(private http: Http) {
    // get token from URL bar
    var match = window.location.hash.match(/#access_token=(.*?)&/)
    var token = match && match[1]
    // save token to localstorage
    if (token) {
      localStorage.setItem('token', token)
    } else {
      // get token from local storage
      token = localStorage.getItem('token')
    }

    this.queries$
      .map(query => `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`)
      .switchMap(url => this.http.get(url, {
        headers: new Headers({
          'Authorization': `Bearer ${token}`
        })
      }))
      .map(response => <Album[]>response.json().albums.items)
      .subscribe(albums => {
        this.albums$.next(albums)
      })
  }

  getAlbums$() {
    //.startWith(this.albums)
    return this.albums$.asObservable()
  }

  search(query = 'batman') {
    this.queries$.next(query)
  }

}
