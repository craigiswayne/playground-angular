import { Component } from '@angular/core';

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
  public links = [
    'custom-form-control-demo'
  ]
}