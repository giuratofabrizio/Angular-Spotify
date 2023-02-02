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
        'Bearer BQB0hPBtGdkfsgesMILaqfmnHgFxjfYC60y6eBXO7-KJTEIqio8O8i3EvvbrhpjS-3tHSj8jnGn9OlKSjYeycgFSY08N6sH8zUzcTY6k06XqYJ-fpz9pWj1x-frLxl1CEw9HJsEN_v3UEXbFJTMtrw43MLpTGs3QL9uPA4kY4m1vSLKffbDbJJ2_Kw7WbJBBpKRG'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}