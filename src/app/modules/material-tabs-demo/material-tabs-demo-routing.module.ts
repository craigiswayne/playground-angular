import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialTabsDemoComponent } from './material-tabs-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialTabsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialTabsDemoRoutingModule { }
