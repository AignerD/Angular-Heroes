import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/** Import observables from HeroService */
import { Observable, of } from 'rxjs';

/** Import the messageService */
import { MessageService } from './message.service';

/** Dependency injectable */
@Injectable({
  providedIn: 'root'
})

export class HeroService {

  /** Method made first before added services
    getHeroes(): Hero[] {
    return HEROES;
  }
  */

  /** Replacing of the previous method to work with real services 
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  */
  /** Last modification */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
