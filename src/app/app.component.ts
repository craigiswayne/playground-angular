import { Component } from '@angular/core';
import {ActivationStart, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground-angular';
  constructor(private readonly router: Router) {
    this.router.events.subscribe(event => {
      console.log('Router Event:', event);
    })

    this.router.events
      .pipe(
        filter(router_event => router_event instanceof ActivationStart)
      )
      .subscribe(router_event => {
        if(!(router_event instanceof  ActivationStart)){
          return
        }
        console.info('IS_ERROR_PAGE: ', router_event.snapshot.routeConfig?.path === '**')
      })
  }
}
