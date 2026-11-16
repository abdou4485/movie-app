import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
  router = inject(Router);
  movieService = inject(MovieService);

  ngOnInit() {
    this.movieService.getMovieList().subscribe((movies) => this.movieService.movieList.set(movies));
  }

  navigateTo(movie: Movie) {
    this.router.navigate(['/', movie.id]);
  }
}
