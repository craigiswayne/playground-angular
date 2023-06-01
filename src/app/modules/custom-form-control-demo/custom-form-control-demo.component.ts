import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'custom-form-control-demo.component.html'
})
export class CustomFormControlDemoComponent implements OnInit {

  public demoForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.demoForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    });
  }
}
