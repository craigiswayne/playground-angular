import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GlossaryComponent } from './glossary.component';

const routes: Routes = [
  {
    path: '',
    component: GlossaryComponent
  },
  {
    path: 'azure-authenticated',
    loadChildren: () => import('./modules/azure-authenticated/azure-authenticated.module')
      .then(m => m.AzureAuthenticatedModule)
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
  },
  {
    path: 'material-tabs-demo',
    loadChildren: () => import('./modules/material-tabs-demo/material-tabs-demo.module')
      .then(m => m.MaterialTabsDemoModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
