import {NgModule} from "@angular/core";
import {APIRequesterService} from "./api-requester.service";
import {APIRequesterRoutingModule} from "./api-requester-routing.module";
import {APIRequesterComponent} from "./api-requester.component";
import {FormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    AsyncPipe,
    APIRequesterRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    APIRequesterComponent
  ],
  providers: [
    APIRequesterService
  ]
})
export class ApiRequesterModule {}
