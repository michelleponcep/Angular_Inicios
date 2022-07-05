import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[]= ['Spiderman', 'Aquaman', 'Superman', 'Batman']
  heroeBorrado: string='';

  
  borrarHeroe(){
  this.heroeBorrado= this.heroes.shift() || '';
  
  }
}
