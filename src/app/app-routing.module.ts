import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { ProtectedComponent } from './protected/protected.component';
import { MyOktaCallbackComponent } from './my-okta-callback/my-okta-callback.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    canActivate: [ OktaAuthGuard ]
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
