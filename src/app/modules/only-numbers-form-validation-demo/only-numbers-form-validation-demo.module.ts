import { NgModule } from '@angular/core';
import { OnlyNumbersFormValidationDemoComponent } from './only-numbers-form-validation-demo.component';
import { OnlyNumbersFormValidationDemoRoutingModule } from './only-numbers-form-validation-demo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyValuePipe, NgForOf, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    OnlyNumbersFormValidationDemoComponent,
  ],
  imports: [
    KeyValuePipe,
    NgForOf,
    NgIf,
    OnlyNumbersFormValidationDemoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class OnlyNumbersFormValidationDemoModule {}
