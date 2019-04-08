import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = "https://api.themoviedb.org/3";
  private API_KEY = "99542193a43f32719300131d920bfa56";
  private movie_name: string;
  private id: number;

  constructor(private httpClient: HttpClient) { 

  }
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

  searchMovies(movie: string){
    return this.httpClient.get(this.baseUrl + 
      '/search/movie?query='+ movie+ '&api_key=' + this.API_KEY)

  }
  // https://api.themoviedb.org/3/movie/popular?api_key=99542193a43f32719300131d920bfa56&language=en-US&page=1

  getPopularMovies(){
    return this.httpClient.get(this.baseUrl + '/movie/popular?api_key='+ this.API_KEY )
  }

  // https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

  getUpcomingMovies(){

    return this.httpClient.get(this.baseUrl + '/movie/upcoming?api_key='+ this.API_KEY);

  }

  // https://api.themoviedb.org/3/movie/550?api_key=99542193a43f32719300131d920bfa56

  getMovie(id: number){
    return this.httpClient.get(this.baseUrl + '/movie/' + id + '?api_key=' + this.API_KEY);


  }
}
