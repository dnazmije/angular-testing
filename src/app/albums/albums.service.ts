import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  // https://jsonplaceholder.typicode.com`/albums?_start=0&_limit=5
  private url: string = `https://jsonplaceholder.typicode.com`;
  // change start and limit here
  private start: number = 0;
  private limit: number = 5;
  private albumsEndpoint: string = `/albums`;
  //?_start=${this.start}&_limit=${this.limit}

  constructor(
    private http: HttpClient
  ) { }

  getAlbums(): Observable<any> {    
    return this.http.get(`${this.url}${this.albumsEndpoint}`);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.url}${this.albumsEndpoint}/${id}`);
  }

}
