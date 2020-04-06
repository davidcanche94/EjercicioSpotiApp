import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  artistas : any[ ] = [];
  loadingShow : boolean ;
  mensajeError : string;
  errorAlert : boolean;
 
  constructor(private spotify:SpotifyService) {
    this.errorAlert = false;
  }

  buscar(termino:string){
    this.loadingShow = true;
    if(termino){
      this.spotify.getArtist(termino)
        .subscribe((data:any) => {
        this.artistas = data;
        this.loadingShow = false;
      }, (errorService:any ) => {
        this.mensajeError = errorService.error.error.message;
        this.errorAlert = true;
        this.loadingShow = false;
      }) ;
    }else{
      this.artistas = [];
      this.loadingShow = false;
    }

  }

}
