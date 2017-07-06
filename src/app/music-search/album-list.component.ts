import { Component, OnInit, Input } from '@angular/core';
import { Album } from './interfaces'

@Component({
  selector: 'sg-album-list',
  template: `
  <div class="card-group">
    <div class="card" *ngFor="let album of albums">
      <img class="card-img-top img-responsive" [src]="album.images[0].url" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">{{ album.name | shorten:25 }}</h4>
        </div>
    </div>
  </div>
  `,
  styles: [`
    .card{
      max-width:25%;
      min-width:25%;
    }
    .card img{
      width:100%;
    }
  `]
})
export class AlbumListComponent implements OnInit {

  @Input()
  albums:Album[] = []

  constructor() { }

  ngOnInit() {
  }

}
