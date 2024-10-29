import {NgModule} from '@angular/core';
import {BehaviourSubjectDemoRoutingModule} from './behaviour-subject-demo-routing.module';
import {BehaviourSubjectDemoComponent} from './behaviour-subject-demo.component';
import {
  BehaviourSubjectDemoChildComponent
} from './behaviour-subject-demo-child/behaviour-subject-demo-child.component';
import {AsyncPipe} from '@angular/common';
import {BehaviourSubjectDemoService} from './behaviour-subject-demo.service';

@NgModule({
  imports: [
    BehaviourSubjectDemoRoutingModule,
    AsyncPipe
  ],
  declarations: [
    BehaviourSubjectDemoComponent,
    BehaviourSubjectDemoChildComponent
  ],
  providers: [BehaviourSubjectDemoService]
})
export class BehaviourSubjectDemoModule{}
