import { Routes } from '@angular/router';
import { MovieList } from './movie-list/movie-list';
import { WishList } from './wish-list/wish-list';
import { MovieDetail } from './movie-detail/movie-detail';

export const routes: Routes = [
  { path: '', component: MovieList },
  { path: 'wishlist', component: WishList },
  { path: ':id', component: MovieDetail },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
