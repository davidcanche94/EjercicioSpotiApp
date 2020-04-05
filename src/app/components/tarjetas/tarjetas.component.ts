import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {

  @Input() items : any[] = [];

  constructor(private _router: Router) {

   }

  verArtista(item:any){

    let idArtist : string ;

    if(item.type == 'artist'){
      //console.log(item);
      idArtist = item.id;
    }
    else if(item.type == "album"){
      if(item.artists.length > 0){
        //console.log(item.artists[0]);
        idArtist = item.artists[0].id;
      }
    }

    if(idArtist){
      this._router.navigate(['/artist',idArtist]);
    }
  }


}
