import { CanDeactivateFn } from '@angular/router';
import { HeroInfoComponent } from './hero-info/hero-info.component';

export const deactivateGuard: CanDeactivateFn<HeroInfoComponent> = (component: HeroInfoComponent, currentRoute, currentState, nextState) => {
  return component?.getCurrentHeroName();
};
