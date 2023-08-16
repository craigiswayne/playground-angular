import { Component } from '@angular/core';
import { Router } from "@angular/router";

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
  }
}
