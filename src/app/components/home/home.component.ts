import * as _ from 'lodash';
import { Component } from '@angular/core';
import {HeroesService} from "../../services/heroes-service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public heroes = [];

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes();
  }

  ngOnInit() {
    this.heroesService.heroes.subscribe(data => {
      if (data) {
        this.heroes = _.concat(this.heroes, data);
      }
    });
  }

  getHeroes() {
    this.heroesService.getHeroes();
  }
}
