import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { AlbumListComponent } from './album-list.component';
import { AlbumComponent } from './album.component';
import { SearchFormComponent } from './search-form.component';
import { MusicService } from './music.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { routing } from './music-search.routing'


@NgModule({
  // imports the CommonModule because its component needs common directives.
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing
  ],
  // The application won't compile until you declare the contact component, directive, and pipe. 
  // Update the declarations in the AppModule accordingly:
  // To eliminate component and directive conflicts, create feature modules that insulate the declarations 
  // in one module from the declarations in another.
  declarations: [
    MusicSearchComponent, 
    AlbumListComponent, 
    AlbumComponent, 
    SearchFormComponent, 
    ShortenPipe,

  ],
  // exports the utility pipe, directive, and component classes as expected.
  exports: [
    MusicSearchComponent
  ],
  // More precisely, Angular accumulates all imported providers before appending the 
  // items listed in @NgModule.providers. This sequence ensures that whatever you add explicitly 
  // to the AppModule providers takes precedence over the providers of imported modules.
  providers: [
    MusicService
  ]
})
export class MusicSearchModule { }
