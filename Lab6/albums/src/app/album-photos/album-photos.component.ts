import { Component } from '@angular/core';
import {Photo} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
    photos : Photo[];
    id : number;
    constructor(private route: ActivatedRoute,
                private albumsService: AlbumsService) {
      this.photos = [];
      this.id =0;
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      console.log(this.id);
      this.albumsService.getPhoto(this.id).subscribe((photos) => {
        this.photos = photos;
      });
    });
  }
}