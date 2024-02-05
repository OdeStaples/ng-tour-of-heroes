import { Component, signal, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  heroList = signal<Hero[]>([]);
  heroName!: string

  constructor(private heroesService: HeroService) {

  }
  ngOnInit(): void {
    this.heroList = this.heroesService.getHeroesList();
  }

  addHero() {
    if (this.heroName.length) {
      this.heroesService.addHero(this.heroName);
    }
  }
}
