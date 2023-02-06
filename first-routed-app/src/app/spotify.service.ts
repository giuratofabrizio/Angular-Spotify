import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
  spotifyServiceObs: any;
  service: any;
  track: any;
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }


  getTrack(id: string): Observable<any> {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});

    
    return this.http.get(url, { headers });
  }

  
  getRouterParam = (params: ParamMap) =>
  {
    let trackId = params.get('id'); //Ottengo l'id dai parametri
    console.log (trackId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.spotifyServiceObs = this.service.getTrack(trackId) ;
    this.spotifyServiceObs.subscribe((data: any)=>this.track = data)
  }


  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCcCS4FFqbryJySuHUHgewqt4KsJHA1RBebh2sWJyqGGGvHUI8Neo47tlyLRHVYSm6VlHzbCg3LB1l0Nqqe0hAVL0xoGKw_zmZ5UG2BbPBKslG3tlAO4YcrKFCmgq3UM9XWCQUCSEBmRWvcDUE6TRkaTdIbIUiAYwikKWeD-vNiC_ZzpoqBAWIwRI4fv0yLYJre'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}