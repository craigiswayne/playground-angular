import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'custom-form-control-demo',
    loadChildren: () => import('./modules/custom-form-control-demo/custom-form-control-demo.module')
      .then(m => m.CustomFormControlDemoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
