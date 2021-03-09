import { Album } from "../album.model";

export class MockAlbumModel {
    
    getMockAlbum(): Album {
        return {
            'id': 1 ,
            'userId': 1,
            'title': 'Random Title'
        };
    }

    getMockAlbums(): Array<Album> {
        return [
            this.getMockAlbum(),
            this.getMockAlbum()
        ];
    }

    countListAlbums() {
        const count = this.getMockAlbums().length;
        return count;
    }

}