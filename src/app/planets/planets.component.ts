import { Component, OnInit } from '@angular/core';

import { StarWarsService } from '../_services/starwars.service';
import { Planets, PlanetDetails } from '../_models/Planets';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets: Planets;
  planetDetails: [PlanetDetails];
  planetsLoaded = false;

  constructor(private starwarsService: StarWarsService) {}

  async ngOnInit(): Promise<any> {
    await this.loadPlanets();
  }



  async loadPlanets(): Promise<any> {
    this.starwarsService.getPlanets().subscribe((result: Planets) => {
      this.planets = result;
      this.planetDetails = result.results;
    });
  }
}
