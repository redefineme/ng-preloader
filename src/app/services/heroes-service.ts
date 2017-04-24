import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from './http-service';
import { HeroModel } from '../models/heroes-model';


@Injectable()
export class HeroesService {
  heroes: BehaviorSubject<HeroModel[]> = new BehaviorSubject<HeroModel[]>(null);

  constructor(private http: HttpService) {
  }

  getHeroes() {
    this.http.get('/users', null)
      .map(res => res.json())
      .subscribe(res => {
        let heroes = [];
        res.forEach(hero => {
          heroes.push(new HeroModel(hero));
        });

        this.heroes.next(heroes);
      });
  }
}
