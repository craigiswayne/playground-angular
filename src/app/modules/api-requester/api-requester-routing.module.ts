import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {APIRequesterComponent} from "./api-requester.component";

const routes: Route[] = [
  {
    path: '',
    component: APIRequesterComponent
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
export class APIRequesterRoutingModule {}
