import { BaseService } from './../services/base.service';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;

  constructor(public movieService: MovieService, private router: Router) {
    // get upcoming movies
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
      console.log("upcoming",this.upcoming_movies);
    });

    // get popular movies
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      console.log("popular",this.popular_movies);
    });

  }

  // get search results of movies
  searchMovies(movie_name) {
    console.log("movie name" ,movie_name);
    this.movieService.searchMovies(movie_name).subscribe(data => {
      this.search_result = data['results'];
      console.log(this.search_result);
    });
  }

  ngOnInit() {
  }

  movieById(id) {
    this.router.navigate(['/movie', id]);
    console.log("upcoming Movie id->", id);
  }


}
