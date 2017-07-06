import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Playlist } from './interfaces'

@Component({
  selector: 'sg-playlist-details',
  template: `
  <h3>Playlist details</h3>

    <ng-template #noPlaylist>
      <p>Select</p>
    </ng-template>
    
<div *ngIf="playlist; else noPlaylist">
    <div [hidden]="edit">

      <p>Name: {{playlist.name}}</p>
      <p>Favourite: {{playlist.favourite? "Favourite" : "Not favourite"}}</p>
      <p [style.color]="playlist.color">Color</p>
      <button class="btn btn-default" (click)="edit = !edit">Edit</button>
      <button class="btn btn-success" (click)="save()">Save</button>
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
        <button class="btn btn-success" (click)="save()">Save</button>
    </div>
  </div>
  </div>
  `,
  styles: []
})
export class PlaylistDetailsComponent implements OnInit {

  edit = false;

  @Input('playlist')
  set playlistSetter(playlist) {
    this.playlist = Object.assign({}, playlist);
  }

  playlist: Playlist;

  @Output('save')
  onSave = new EventEmitter()

  save() {
    this.onSave.emit(this.playlist)
  }
  constructor() { }

  ngOnInit() {
  }

}
