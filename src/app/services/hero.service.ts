import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/Iheros';
import { HEROES } from '../datas/datas-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
