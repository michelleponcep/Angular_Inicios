import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';

import { HeroesModule } from './heroes/heroes.module';
//import { ContadorComponent } from './contador/contador.module';

import { MainPageComponent } from './musica/main-page/main-page.component';
import { MusicaModule } from './musica/musica.module';

@NgModule({
  declarations: [
    AppComponent,
    //MainPageComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
    MusicaModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
