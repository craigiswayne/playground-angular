import {NgModule} from "@angular/core";
import {ReactiveFormDemoComponent} from "./reactive-form-demo.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@NgModule({
  declarations: [
    ReactiveFormDemoComponent
  ],
  imports: [
    ReactiveFormsModule,
    NgClass
  ]
})
export class ReactiveFormDemoModule {}
