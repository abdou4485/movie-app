import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-wish-list',
  imports: [],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList {
  movieService = inject(MovieService);
  wishList: Movie[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
  router = inject(Router);

  navigateTo(movie: Movie) {
    this.router.navigate(['/', movie.id]);
  }
}
