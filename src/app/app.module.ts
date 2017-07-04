import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistsListComponent } from './playlists/playlists-list.component';
import { PlaylistsListItemComponent } from './playlists/playlists-list-item.component';
import { PlaylistDetailsComponent } from './playlists/playlist-details.component';
import { PlaylistsComponent } from './playlists/playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsListComponent,
    PlaylistsListItemComponent,
    PlaylistDetailsComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
