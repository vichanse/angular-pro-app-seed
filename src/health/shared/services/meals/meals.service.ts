import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from './../../../../store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthService } from './../../../../auth/shared/services/auth/auth.service';

export interface Meal {
  name: string,
  ingedients: string[],
  timestamp: number,
  $key: string,
  $exists: () => boolean

}

@Injectable()
export class MealsService {

  meals$: Observable<Meal[]> = this.db.list(`meals/${this.uid}`)
    .do(next => this.store.set('meals', next));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authServie: AuthService
  ) {}

  get uid() {
    return this.authServie.user.uid;
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`).push(meal);
  }

  removeMeal(key: string) {
    return this.db.list(`meals/${this.uid}`).remove(key);
  }
}