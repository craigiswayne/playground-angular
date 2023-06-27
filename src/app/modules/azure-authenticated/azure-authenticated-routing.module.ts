import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AzureAuthenticatedComponent } from './azure-authenticated.component';

const routes: Route[] = [
  {
    path: '',
    component: AzureAuthenticatedComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AzureAuthenticatedRoutingModule {}
