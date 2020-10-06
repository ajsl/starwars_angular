import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StarWarsService } from './_services/starwars.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [	
    AppComponent,
      DashboardComponent,
      NavBarComponent,
      PlanetsComponent,
      FilmsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StarWarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
