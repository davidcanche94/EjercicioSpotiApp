import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify services listo');
  }

  getQuery (termino:string){
    const url = `https://api.spotify.com/v1/${termino}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDlNsKC4yjBOPyrBsY5jr0J6N7ynC1oYKa1IGgIhBGowJrgv7vnGUcMOqS0mK32A0AD4D_1c-FmyKTtMIA'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20').pipe( map(  data => data['albums'].items));
  }

  getArtist(terminoBusqueda:string){

    return this.getQuery(`search?q=${terminoBusqueda}&type=artist&limit=15`).pipe( map(  data => data['artists'].items));
  }

  getInfoArtist(idArtist:string){
    return this.getQuery(`artists/${idArtist}`);
  }

  getTopTracks(idArtist:string){
    return this.getQuery(`artists/${idArtist}/top-tracks?country=es`).pipe( map( data => data['tracks']) );
  }
}
