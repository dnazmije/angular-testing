import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  public albums: Album[] = [];
  public heading: string = `Albums List`;

  constructor(
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.listAlbums();
  }

  listAlbums() {
    this.albumsService.getAlbums().subscribe((response: Album[]) => {
      this.albums = response;
      console.log(`albums`, this.albums);
    }, error => {
      console.log(error);
      this.alertError();
    })
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      alert(`Album with id ${id} is deleted.`);
    }, error => {
      console.log(error);
      this.alertError();
    });
  }

  alertError() {
    alert(`An error occured`);
  }
}
