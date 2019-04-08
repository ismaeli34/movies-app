import { MovieService } from './../services/movie.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private sub: any;

  movie: any;
  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {

    this.sub = this.router.params.subscribe(params => {
      const id = +params['movieID']; // (+) converts string 'id' to a number
      console.log("ID",id);
      this.movieService.getMovie(id).subscribe(data => {
        this.movie = data;
        // console.log(data);
      });

      // In a real app: dispatch action to load the details here.
   });

    // this.router.params.subscribe((params) => {
    //   const id = params['movieID'];
    //   this.movieService.getMovie(id).subscribe(data => {
    //     this.movie = data;
    //     // console.log(data);
    //   });
    // });
  }


}
