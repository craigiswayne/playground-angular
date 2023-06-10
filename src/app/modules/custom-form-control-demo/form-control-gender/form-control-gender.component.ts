import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type gender = 'male' | 'female' | 'n/a';

@Component({
  selector: 'app-form-control-gender',
  templateUrl: 'form-control-gender.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: FormControlGenderComponent
    }
  ]
})
export class FormControlGenderComponent implements ControlValueAccessor {

  onChange = (value: gender) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  private myCustomProp: gender|null = null;
  public setControlValue(gender: gender) {
    this.markAsTouched();
    this.myCustomProp = gender;
    this.onChange(gender);
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: gender): void {
    this.myCustomProp = value;
  }

  markAsTouched() {
    if (this.touched) {
      return;
    }
    this.onTouched();
    this.touched = true;
  }
}
