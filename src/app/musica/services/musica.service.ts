import { Injectable } from "@angular/core";
import { Ochentera } from "../interfaces/musica.interfaces";

@Injectable()
export class musicaservice {

    private _grupos: Ochentera[] = [
        {
          nombre: 'Tears for Fears',
          anios: 83
        },
        {
          nombre: 'Mini Vanilli',
          anios: 88
        }
      ];

      get grupos(): Ochentera[] {
        return [...this._grupos];
      }

    constructor() {

            
    }
    
    agregargrupos(grupos: Ochentera) {
        this._grupos.push(grupos);
    }
}