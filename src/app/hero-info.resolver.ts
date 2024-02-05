import { ResolveFn, } from '@angular/router';
import { HeroService } from './hero.service';
import { inject } from '@angular/core';
import { Hero } from './hero';

export const heroInfoResolver: ResolveFn<Hero> = (route, state) => {
  const heroService = inject(HeroService)
  return (heroService.getHeroInfo(Number(route.params["id"])))[0];
};
