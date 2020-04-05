import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any[] = [];
  loadingShow : boolean;
  errorAlert : boolean;
  mensajeError : string;

  constructor(private spotify: SpotifyService) {
    this.errorAlert = false;
    this.loadingShow = true;
    this.spotify.getNewReleases()
    .subscribe( (data:any) =>{
      this.nuevasCanciones = data;
      //console.log(data);
      this.loadingShow = false;
    }, ( errorService ) => {
      this.errorAlert = true;
      this.loadingShow = false;
      this.mensajeError = errorService.error.error.message;
    });
   }

  ngOnInit() {
  }

}
