import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../../shared/validators/my-validators';

@Component({
  templateUrl: 'only-numbers-form-validation-demo.component.html'
})
export class OnlyNumbersFormValidationDemoComponent implements OnInit {

  public demoForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.demoForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      age: [null, [MyValidators.onlyWholeNumbersValidator, Validators.min(1), Validators.max(99), Validators.required]],
    });
  }
}
