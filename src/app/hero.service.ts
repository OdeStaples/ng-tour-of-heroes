import { Injectable, signal } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesList = signal<Hero[]>([
    { id: 12, name: "Dr. Nice" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr. IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" },
  ])
  constructor() { }

  getHeroesList() {
    return this.heroesList;
  }

  getHeroInfo(id: number) {
    // returns the hero whose id matches
    return this.heroesList().filter((hero) => hero.id === id)
  }

  updateHeroData(id: number, newName: string) {
    // updates the list with a new list
    this.heroesList.update((heroes: Hero[]) => {
      // creates a new list
      return heroes.map((hero: Hero) => {
        // matches the id
        if (hero.id == id) {
          // updates the name
          return { ...hero, name: newName }
        } else {
          return hero;
        }
      })
    })
  }

  addHero(newName: string) {
    // gets the id of the last hero
    var lastIndex = this.heroesList()[this.heroesList().length - 1].id;
    // updates the hero list
    this.heroesList.update((heroes: Hero[]) => {
      let newHero: Hero = { id: lastIndex + 1, name: newName }
      return [...heroes, newHero];
    })
  }
}
