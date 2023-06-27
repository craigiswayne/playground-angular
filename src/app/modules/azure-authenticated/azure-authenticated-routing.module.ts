import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureAuthenticatedComponent } from './azure-authenticated.component';

const routes: Routes = [
  {
    path: '',
    component: AzureAuthenticatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AzureAuthenticatedRoutingModule { }
