import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../_services/starwars.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  filmData: any;
  films: [];

  constructor(private starWarsService: StarWarsService) { }


 ngOnInit(): void {
     this.loadFilms();
  }

  loadFilms(): void {
    this.starWarsService.getFilms().subscribe(data => {
      this.filmData = data;
      this.films = this.filmData.results;
    });
  }

}
