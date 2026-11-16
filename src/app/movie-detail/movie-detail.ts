import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MovieService } from '../movie';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetail implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  movieService = inject(MovieService);

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = Number(params.get('id'));
          return this.movieService.getMovieById(id);
        })
      )
      .subscribe((movie) => this.movieService.selectedMovie.set(movie));
  }

  backToMovieList() {
    this.router.navigate(['/']);
  }

  addToWish(movie: Movie | null) {
    if (movie) {
      this.movieService.addToWishlist(movie);
    }
  }
}
