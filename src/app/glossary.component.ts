import { Component } from '@angular/core';
import { APP_SETTINGS } from './app.settings';

@Component({
  template: `
    <h1>Glossary</h1>
    <ul>
      <li *ngFor="let item of links">
        <a [routerLink]="[item]">{{item}}</a>
      </li>
    </ul>`
})
export class GlossaryComponent {
  public links = APP_SETTINGS.links;
}
