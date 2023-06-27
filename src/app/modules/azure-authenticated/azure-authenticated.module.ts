import { NgModule } from '@angular/core';
import { AzureAuthenticatedComponent } from './azure-authenticated.component';
import { AzureAuthenticatedRoutingModule } from './azure-authenticated-routing.module';

@NgModule({
  imports: [
    AzureAuthenticatedRoutingModule
  ],
  declarations: [
    AzureAuthenticatedComponent
  ]
})
export class AzureAuthenticatedModule {}
