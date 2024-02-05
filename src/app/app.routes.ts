import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { heroInfoResolver } from './hero-info.resolver';
import { deactivateGuard } from './deactivate.guard';

export const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "hero-info/:id", component: HeroInfoComponent, resolve: { heroData: heroInfoResolver }, canDeactivate: [deactivateGuard] },
  { path: "**", redirectTo: "dashboard" }
];
