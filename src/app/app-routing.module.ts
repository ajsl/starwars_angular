import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmsComponent } from './films/films.component';



const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'films', component: FilmsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
