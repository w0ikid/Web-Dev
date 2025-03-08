import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album, Photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL : string ='https://jsonplaceholder.typicode.com';
  constructor(private client : HttpClient) {}

  getAlbums() : Observable<Album[]>{
    return this.client.get<Album[]>(this.BASE_URL + '/albums');
  }
  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  getPhoto(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }

  deleteAlbums(id : number) : Observable<Album>{
      return this.client.delete<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  addAlbums(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  putAlbums(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }
}