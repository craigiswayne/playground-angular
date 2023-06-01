import { NgModule } from '@angular/core';
import { CustomFormControlDemoComponent } from './custom-form-control-demo.component';
import { CustomFormControlDemoRoutingModule } from './custom-form-control-demo-routing.module';
import { FormControlGenderComponent } from './form-control-gender/form-control-gender.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyValuePipe, NgForOf, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    CustomFormControlDemoComponent,
    FormControlGenderComponent
  ],
  imports: [
    KeyValuePipe,
    NgForOf,
    NgIf,
    CustomFormControlDemoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CustomFormControlDemoModule {}
