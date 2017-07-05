import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistsListComponent } from './playlists/playlists-list.component';
import { PlaylistsListItemComponent } from './playlists/playlists-list-item.component';
import { PlaylistDetailsComponent } from './playlists/playlist-details.component';
import { HightlightDirective } from './playlists/hightlight.directive';

import { PlaylistsService } from './playlists/playlists.service';
import { MusicSearchModule } from './music-search/music-search.module';
import { HttpModule } from '@angular/http'


@NgModule({
  declarations: [
    PlaylistsComponent,
    AppComponent,
    PlaylistsListComponent,
    PlaylistsListItemComponent,
    PlaylistDetailsComponent,
    HightlightDirective
  ],
  imports: [
    BrowserModule, //ngStyle, ngForms, ngClass ....
    FormsModule,
    MusicSearchModule,
    HttpModule
  ],
  providers: [
    // {provider: PlaylistsService, useClass: playlistsService}
    PlaylistsService
  ],
   bootstrap: [AppComponent] // zacznij od AppComponent - zacznij budowanie
})

export class AppModule { }
