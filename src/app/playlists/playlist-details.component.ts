import { Component, OnInit, Input } from '@angular/core';
import {Playlist} from './interfaces'

@Component({
  selector: 'sg-playlist-details',
  template: `
<div [hidden]="edit">
  <p>Name: {{playlist.name}}</p>
  <p>Favourite: {{playlist.favourite? "Favourite" : "Not favourite"}}</p>
  <p [style.color]="playlist.color">Color</p>
  <button class="btn btn-default" (click)="edit = !edit">Edit</button>
</div>

<hr/>


  <div [hidden]="!edit">
    <div class="form-group">
      <label>Nazwa: </label>
        <input type="text" class="form-control" [(ngModel)]="playlist.name">
    </div>

    <div class="form-group">
      <label>Favourite: </label>
        <input type="checkbox" [(ngModel)]="playlist.favourite"> 
    </div>

    <div class="form-group">
      <label>Color: </label>
        <input type="color" [(ngModel)]="playlist.color">

        <button class="btn btn-default" (click)="edit = !edit">Cancel</button>
        <button class="btn btn-success">Save</button>
    </div>
  </div>
  `,
  styles: []
})
export class PlaylistDetailsComponent implements OnInit {

  edit = false;

  @Input('playlist')
  playlist:Playlist;

  // set playlistSetter(playlist) {
  //   this.playlist = Object.assign({}, playlist);
  // }

  save(){
    
  }
  constructor() { }

  ngOnInit() {
  }

}
