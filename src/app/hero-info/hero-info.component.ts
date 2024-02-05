import { Location, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-info',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hero-info.component.html',
  styleUrl: './hero-info.component.css'
})
export class HeroInfoComponent implements OnInit {
  heroName!: string
  heroId!: number
  prevHeroName!: string
  previousRoute!: string;

  constructor(private route: ActivatedRoute, private location: Location, private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.heroId = data["heroData"]["id"];
      this.heroName = data["heroData"]["name"];
      this.prevHeroName = this.heroName
    })
  }

  navigateBack() {
    this.location.back()
  }

  getCurrentHeroName() {
    if (this.heroName !== this.prevHeroName) {
      return confirm("Do You want to discard changes?")
    }
    return true
  }

  updateHeroName(id: number, name: string) {
    this.prevHeroName = name;
    this.heroService.updateHeroData(id, name);
  }

}
