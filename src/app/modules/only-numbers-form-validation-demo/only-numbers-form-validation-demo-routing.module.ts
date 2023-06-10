import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyNumbersFormValidationDemoComponent } from './only-numbers-form-validation-demo.component';

const routes: Routes = [
  {
    path: '',
    component: OnlyNumbersFormValidationDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlyNumbersFormValidationDemoRoutingModule { }
