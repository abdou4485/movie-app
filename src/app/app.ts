import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBar } from './head-bar/head-bar';
import { SearchBar } from './search-bar/search-bar';

@Component({
  imports: [HeadBar, SearchBar, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('movie-app');
}
