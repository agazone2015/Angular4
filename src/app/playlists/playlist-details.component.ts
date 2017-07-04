import { Component, OnInit } from '@angular/core';
import {Playlist} from './interfaces'
@Component({
  selector: 'sg-playlist-details',
  template: `
<div>
  <p>Name {{playlist.name}}</p>
  <p> {{playlist.favourite? "Favourite" : "Not favourite"}}</p>
  <p [style.color]="playlist.color">Color</p>
</div>

  <div>
    <div class="form-group">
      <label>Nazwa: </label>
        <input type="text" [value]="playlist.name" class="form-control" (keyup)=" playlist.name = $event.target.value "> <!--przekazuje obiect-->
    </div>

    <div class="form-group">
      <label>Favourite: </label>
        <input type="checkbox" [checked]="playlist.favourite" (change)=" playlist.favourite = $event.target.checked "> <!--przekazuje stringa-->
    </div>

    <div class="form-group">
      <label>Color: </label>
        <input type="color" [value]="playlist.color" (change)=" playlist.color = $event.target.value ">>

        <button class="btn btn-default">Cancel</button>
        <button class="btn btn-success">Save</button>
    </div>
  </div>
  `,
  styles: []
})
export class PlaylistDetailsComponent implements OnInit {

  playlist:Playlist = {
    id: null,
    name: 'Angular Hits',
    color: '#ff0000',
    favourite: true
  }

  constructor() { }

  ngOnInit() {
  }

}
