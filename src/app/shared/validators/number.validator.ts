/**
 * Whatever the input, it just needs to be a number
 * So the following would be valid
 * -1
 * -0.1
 * 0.1
 * 87879879
 * 0,8
 * -0,8
 */
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function numberValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    if (!control.value) {
      return null;
    }

    const controlStringValue = control.value.toString();

    /**
     * Checks for the existence of any characters other than the ones specified below
     */
    const isValid = /[^-\d,.]/.test(controlStringValue) === false && !isNaN(+controlStringValue);

    return !isValid ? {isNumber: false}: null;
  }
}
