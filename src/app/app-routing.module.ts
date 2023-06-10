import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlossaryComponent } from './glossary.component';

const routes: Routes = [
  {
    path: '',
    component: GlossaryComponent
  },
  {
    path: 'only-numbers-form-validation-demo',
    loadChildren: () => import('./modules/only-numbers-form-validation-demo/only-numbers-form-validation-demo.module')
      .then(m => m.OnlyNumbersFormValidationDemoModule)
  },
  {
    path: 'custom-form-control-demo',
    loadChildren: () => import('./modules/custom-form-control-demo/custom-form-control-demo.module')
      .then(m => m.CustomFormControlDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
