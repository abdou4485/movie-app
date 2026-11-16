import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs';
import { environment } from '../environments/environment';
import { Movie } from './movie.model';

@Service()
export class MovieService {
  http = inject(HttpClient);
  url = environment.url_api;
  key = environment.api_key;
  movieUrl = environment.url_movie_api;

  movieList = signal<Movie[]>([]);
  selectedMovie = signal<Movie | null>(null);
  wishList = signal<Movie[]>([]);

  getMovieList() {
    return this.http.get<any>(`${this.url}?api_key=${this.key}`).pipe(
      map((data) => data.results as Movie[]),
      shareReplay({ bufferSize: 1, refCount: false })
    );
  }

  getMovieById(id: number) {
    return this.http.get<Movie>(`${this.movieUrl}${id}?api_key=${this.key}`);
  }

  getMovieByTitle(title: string) {
    return this.http
      .get<any>(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${this.key}`)
      .pipe(map((data) => data.results as Movie[]));
  }

  addToWishlist(movie: Movie) {
    if (!localStorage.getItem('wishlist')?.includes(JSON.stringify(movie))) {
      this.wishList.update((list) => [...list, movie]);
      localStorage.setItem('wishlist', JSON.stringify(this.wishList()));
    }
  }
}
