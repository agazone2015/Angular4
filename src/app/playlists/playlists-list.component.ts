import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from './interfaces'
        
        // wszystko to wrzucamy w [hightlight]
        // [style.borderLeftColor]="(active == playlist? playlist.color: 'black')"
        // (mouseenter)="active = playlist"
        // (mouseleave)="active = false "

@Component({
  selector: 'sg-playlists-list',
  template: `
    <div class="list-group">
      <div *ngFor="let playlist of playlists" class="list-group-item color-border" 
        [class.active]="selected == playlist" 

        [sgHightlight]="playlist.color"

        (click)=" selectPlaylist(playlist) ">
        {{playlist.name}}
      </div>
    </div>
  `,
  styles: [`
    .color-border {
      border-left: 3px solid black;
    }
  `]
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
