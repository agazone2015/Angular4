import { RouterModule, Routes, Route } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { MusicSearchComponent } from './music-search/music-search.component'


const routes:Routes = [
  {path: '', redirectTo:'playlists', pathMatch: 'full'},

  {path: 'playlists', component: PlaylistsComponent},
  {path: 'music', component: MusicSearchComponent},
  // 404 - nie znaloziono strony
  {path: '**', redirectTo:'playlists', pathMatch: 'full'}
]

export const routing = RouterModule.forRoot(routes, {
  enableTracing: true,
  useHash: true,
})
