import { Component, OnInit } from '@angular/core';
import { Playlist } from './interfaces';
import { PlaylistsService } from './playlists.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'sg-playlists',
  template: `
    <div class="row">
      <div class="col">
        <sg-playlists-list 
          [playlists]='playlists' (select)="select($event)"
          [selected]='selectedPlaylist'>
        </sg-playlists-list>
      </div>
        <div class="col">
            <router-outlet></router-outlet>
          </div>
      </div>
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  selectedPlaylist;

  select(playlist) {
    this.selectedPlaylist = playlist
    this.router.navigate(['playlists', playlist.id])
  }

    playlists:Playlist[] = []

    

    constructor(private service:PlaylistsService, private route: ActivatedRoute, private router: Router) {
      // const service = new PlaylistsService()
      this.playlists = service.getPlaylists()

      this.route.firstChild.params.pluck('id').subscribe(id => {
        this.selectedPlaylist = this.service.getPlaylist(id)
      })
  
     }

  ngOnInit() {
  }

}
