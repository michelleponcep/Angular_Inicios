import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { GruposComponent } from './grupos/grupos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { musicaservice } from './services/musica.service';


@NgModule({
  declarations: [
    MainPageComponent,
    GruposComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    musicaservice
  ]
  
})
export class MusicaModule { }
