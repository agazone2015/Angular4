import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from './interfaces'


@Component({
  selector: 'sg-playlists-list',
  template: `
    <div class="list-group">
      <div *ngFor="let playlist of playlists" class="list-group-item" 
      [class.active]="selected == playlist" 
      (click)=" selectPlaylist(playlist) ">
        {{playlist.name}}
      </div>
    </div>
  `,
  styles: [

  ]
})
export class PlaylistsListComponent implements OnInit {

  @Input()
  selected:Playlist;

  @Input()
  playlists: Playlist[] = []

  @Output('select')
  selectedChange = new EventEmitter()

  selectPlaylist(playlist) {
    this.selectedChange.emit(playlist)
  }

  constructor() { 
      
  }

  ngOnInit() {
      
  }

}
