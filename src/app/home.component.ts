import { Component } from '@angular/core';
import { APP_SETTINGS } from './app.settings';

@Component({
  template: `
    <h1>Glossary</h1>
    <ul>
      <li *ngFor="let item of links">
        <a [routerLink]="[item]">{{item}}</a>
      </li>
      <li>
        <a [routerLink]="['/broken']">BROKEN PAGE</a>
      </li>
    </ul>`
})
export class HomeComponent {
  public links = APP_SETTINGS.links;
}
