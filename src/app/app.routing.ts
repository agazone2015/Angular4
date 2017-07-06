import { RouterModule, Routes, Route } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { MusicSearchComponent } from './music-search/music-search.component';
import { PlaylistDetailsComponent } from './playlists/playlist-details.component';
import { PlaylistContainerComponent } from './playlists/playlist-container.component'


const routes: Routes = [
  { path: '', redirectTo: 'playlists', pathMatch: 'full' },

  {
    path: 'playlists', component: PlaylistsComponent, children: [

      { path: '', component: PlaylistContainerComponent },
      { path: ':id', component: PlaylistContainerComponent }
    ],
  },
  // 404 - nie znaloziono strony
  { path: '**', redirectTo: 'playlists', pathMatch: 'full' }

]

export const routing = RouterModule.forRoot(routes, {
  enableTracing: true,
  useHash: true,
})
