import { Component, OnInit, signal } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroList = signal<Hero[]>([]);
  constructor(private heroesService: HeroService) {

  }
  ngOnInit(): void {
    this.heroList = this.heroesService.getHeroesList();
  }
}
