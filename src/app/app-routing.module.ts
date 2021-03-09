import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsListComponent },
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
