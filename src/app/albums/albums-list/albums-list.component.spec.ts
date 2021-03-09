import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsModule } from '../albums.module';
import { AlbumsService } from '../albums.service';
import { MockAlbumModel } from '../mock/mock-album.model';
import { MockAlbumsService } from '../mock/mock-albums.service';

import { AlbumsListComponent } from './albums-list.component';

describe('AlbumsListComponent', () => {
  let component: AlbumsListComponent;
  let fixture: ComponentFixture<AlbumsListComponent>;
  let mockAlbumModel: MockAlbumModel;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: AlbumsService, useClass:  MockAlbumsService }

      ],
      imports: [
        HttpClientModule,
        AlbumsModule
      ]
    })
    .compileComponents();
    mockAlbumModel = new MockAlbumModel();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Albums page', () => {
    it('should have heading of `Albums List`', () => {
      expect(component.heading).toEqual('Albums List');
    });
  });

  describe('When data is retreved', () => {
    it('Data should have items as expected', () => {
      const getAlbums = mockAlbumModel.countListAlbums();
      expect(component.albums.length).toEqual(2);
    });
  });

  describe('When DEL button is clicked', () => {
    it('item should be removed ', () => {
      expect(component.deleteAlbum(1)).toHaveBeenCalled;
    });
  });

});
