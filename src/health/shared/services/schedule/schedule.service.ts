import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Store } from '../../../../store';

@Injectable()
export class ScheduleService {

  private date$ = new BehaviorSubject(new Date());

  schedule$: Observable<any[]> = this.date$
    .do((next: any) => this.store.set('date', next));

  constructor(
    private store: Store
  ) {}

  updateDate(date: Date) {
    this.date$.next(date);
  }
}