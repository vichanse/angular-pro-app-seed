import { Subscription } from 'rxjs/Subscription';
import { ScheduleService } from './../../../shared/services/schedule/schedule.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from 'store';

@Component({
  selector: 'schedule',
  styleUrls: ['schedule.component.scss'],
  template: `
    <div class="schedule">
     
      <schedule-calendar
        [date]="date$ | async"
        (change)="changeDate($event)">
      </schedule-calendar>
    </div>
  `
})
export class ScheduleComponent implements OnInit, OnDestroy{

  date$: Observable<Date>;
  subscriptions: Subscription[] = [];
  
  constructor(
    private store: Store,
    private scheduleService: ScheduleService
  ) {}

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  ngOnInit() {
    this.date$ = this.store.select('date');
    
    this.subscriptions = [
      this.scheduleService.schedule$.subscribe()
    ]

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}