import { Component } from '@angular/core';
import { MusicService } from './music-search/music.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular_4';

  constructor(private service:MusicService) {
  }
}


