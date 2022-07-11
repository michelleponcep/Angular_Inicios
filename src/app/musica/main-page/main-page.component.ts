import { Component } from '@angular/core';
import { Ochentera } from '../interfaces/musica.interfaces';
import { musicaservice } from '../services/musica.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

    nuevo: Ochentera = 
     {
      nombre: 'Kabah',
      anios: 95
     }

    //  agregarNuevoOchentera( argumento: Ochentera) {
    //   console.log(argumento);
    //   this.grupos.push(argumento);
    //  }

  constructor() {
    
  }

}
