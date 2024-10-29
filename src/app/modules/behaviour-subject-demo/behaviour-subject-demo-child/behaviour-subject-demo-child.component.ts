import {Component} from '@angular/core';
import {BehaviourSubjectDemoService} from '../behaviour-subject-demo.service';

@Component({
  selector: 'app-behaviour-subject-demo-child',
  templateUrl: 'behaviour-subject-demo-child.component.html'
})
export class BehaviourSubjectDemoChildComponent {
  constructor(public service: BehaviourSubjectDemoService){}
}
