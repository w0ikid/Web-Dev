import { Component } from '@angular/core';
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: Album[];
  newAlbum : Album;
  title : string;
  constructor(private albumsService: AlbumsService) {
    this.albums = [];
    this.newAlbum = {} as Album;
    this.title = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.albumsService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
    })
  }

  deleteAlbum(id : number) {
    this.albumsService.deleteAlbums(id).subscribe((album) =>{
       this.albums.splice(id,1);
    })
  }

  addAlbum(){
    this.albumsService.addAlbums(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum= {} as Album;
    });
  }

  putAlbum(album: Album) {
    album.title = this.title;
    this.albumsService.putAlbums(album).subscribe((album) => {
      console.log(album.title);
    });
    this.title = '';
  }
}