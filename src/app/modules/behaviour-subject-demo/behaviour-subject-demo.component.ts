import {Component} from '@angular/core';
import {BehaviourSubjectDemoService} from './behaviour-subject-demo.service';
import {tap} from 'rxjs';

@Component({
  templateUrl: 'behaviour-subject-demo.component.html'
})
export class BehaviourSubjectDemoComponent {

  public subscribed_variable: number;
  public tapped_variable: number;
  constructor(public service: BehaviourSubjectDemoService) {
    this.service.value$
      .pipe(
        tap( res => {
          this.tapped_variable = res;
        })
      )
      .subscribe(res => {
        this.subscribed_variable = res;
      })
  }
}
