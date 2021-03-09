import { Observable, of } from "rxjs";
import { MockAlbumModel } from "./mock-album.model";

export class MockAlbumsService {
    
    private mockAlbums = new MockAlbumModel();

    getAlbums(): Observable<any> {
        return of(this.mockAlbums.getMockAlbums());
    }

    deleteAlbum(): Observable<any> {
        return of( {} );
    }

}