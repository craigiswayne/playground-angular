import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BehaviourSubjectDemoComponent} from './behaviour-subject-demo.component';

const routes: Routes = [
  {
    path: '',
    component: BehaviourSubjectDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BehaviourSubjectDemoRoutingModule {}
