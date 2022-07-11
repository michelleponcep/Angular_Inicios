import { Component, Input, OnInit } from '@angular/core';
import { Ochentera } from '../interfaces/musica.interfaces';
import { musicaservice } from '../services/musica.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent  {

 // @Input() grupos: Ochentera[]= [];
 get grupos() {
  return this.musicaservice.grupos;
 }

  constructor(private musicaservice: musicaservice) {}
}
