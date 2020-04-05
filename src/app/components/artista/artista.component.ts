import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {


  artista : any ;
  topTracks : any[];

  constructor(private _activateroute : ActivatedRoute,
              private _spotifyservice : SpotifyService) {

    this._activateroute.params.subscribe( params => {
      if(params.id){
        this.getArtistComplete(params.id);
      }
    })
  }

  getArtistComplete(id : string){
    this._spotifyservice.getInfoArtist(id).subscribe( (data:any) => {
      this.artista = data;
      console.log(this.artista);
      this.getTopTracks(this.artista.id);
    })
  }

  getTopTracks( id : string){
    this._spotifyservice.getTopTracks(id).subscribe( (data:any) => {
      console.log(data);
      this.topTracks = data;
    } ) 
  }



}
