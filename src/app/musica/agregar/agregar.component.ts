import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ochentera } from '../interfaces/musica.interfaces';
import { MainPageComponent } from '../main-page/main-page.component';
import { musicaservice } from '../services/musica.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {



  @Input() nuevo: Ochentera = {
    nombre: 'Culture Club',
    anios: 86
  }

  //@Output() onNuevoOchentera: EventEmitter<Ochentera>= new EventEmitter();

constructor(private musicaservice: musicaservice)
{

}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    //this.onNuevoOchentera.emit(this.nuevo)
    this.musicaservice.agregargrupos(this.nuevo);
    this.nuevo= {
      nombre: '',
      anios: 0
    }
  
  }
  

}
