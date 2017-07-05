import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumComponent } from './album.component';
import { SearchFormComponent } from './search-form.component';

import { MusicService } from './music.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MusicSearchComponent, 
    AlbumListComponent, 
    AlbumComponent, 
    SearchFormComponent
  ],
  exports: [
    MusicSearchComponent
  ],
  providers: [
    MusicService
  ]
})
export class MusicSearchModule { }
