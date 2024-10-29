import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'only-numbers-form-validation-demo',
    loadChildren: () => import('./modules/only-numbers-form-validation-demo/only-numbers-form-validation-demo.module')
      .then(m => m.OnlyNumbersFormValidationDemoModule)
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
    path: 'azure-authenticated',
    loadChildren: () => import('./modules/azure-authenticated/azure-authenticated.module')
      .then(m => m.AzureAuthenticatedModule)
  },
  {
    path: 'material-tabs-demo',
    loadChildren: () => import('./modules/material-tabs-demo/material-tabs-demo.module')
      .then(m => m.MaterialTabsDemoModule)
  },
  {
    path: 'api-requester',
    loadChildren: () => import('./modules/api-requester/api-requester.module')
      .then(m => m.ApiRequesterModule)
  },
  {
    path: 'behaviour-subject-demo',
    loadChildren: () => import('./modules/behaviour-subject-demo/behaviour-subject-demo.module')
      .then(m => m.BehaviourSubjectDemoModule)
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
