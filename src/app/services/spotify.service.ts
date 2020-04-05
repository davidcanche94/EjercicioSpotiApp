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

  tokenSpotify : string = '';

  getToken(){
    const body = { grant_type:'client_credentials',
                   client_id:'2b8e3eb30cbb4b54bf84987d8c4d1b1d',
                   client_secret:'37650402a1194b388a7c201077a4cbf4' 
                  };

    return this.http.post('https://accounts.spotify.com/api/token',body);

  }

  getQuery (termino:string){
    this.getToken().subscribe( (data:any) => {
      console.log(data);
     });
    const url = `https://api.spotify.com/v1/${termino}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDurTRYMx6UdvW7WzS_P-UrzhlYvMP3e6mPa9kCmdicKIfdRYEEgz65wolTLwqQtibWzzT2Rm9zXgLjpwE'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20').pipe( map(  data => data['albums'].items));
  }

  getArtist(terminoBusqueda:string){

    return this.getQuery(`search?q=${terminoBusqueda}&type=artist&limit=15`).pipe( map(  data => data['artists'].items));
  }
}
