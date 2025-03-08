import { Component } from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";

class PostService {
}

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  album : Album;
  title : string;

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) {
    this.album = {} as Album;
    this.title = '';
  }

  saveTitle(){
     this.album.title = this.title;
     this.title = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    })

  }
}