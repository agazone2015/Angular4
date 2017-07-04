import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
    BrowserModule, //ngStyle, ngForms, ngClass ....
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
