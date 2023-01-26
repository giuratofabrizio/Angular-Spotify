import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDVRGuMXa14bXLTXuL8J-8NqqZ9fOsDlJIOdiGsVovc3VV_nYwmgiiKIFnKXy8J6-FEjGi-sLujLxWvi6ysmV0DqLFmd8BpoiLYTCrLJdTaaZOZ4dSWCi1NzBjR6emGAq3ZjRqszYtCTCJUcca1w9Nlxf0DbqRoOcpguMig__Udq3KrkMBZr_5ARYeYcBCzfW0Q'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}