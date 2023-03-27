import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OktaAuthModule, OktaConfig } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';
import { ProtectedComponent } from './protected/protected.component';
import { MyOktaCallbackComponent } from './my-okta-callback/my-okta-callback.component';

const authConfig = {
  issuer: 'https://dev-876760.okta.com/oauth2/default',
  clientId: '0oaqf93pw1XNHPxov357',
  redirectUri: window.location.origin + '/login/callback'
}
const oktaAuth = new OktaAuth(authConfig);
const moduleConfig: OktaConfig = { oktaAuth };

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    MyOktaCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // OktaAuthModule.forRoot(moduleConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
