import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function onlyWholeNumbersValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const validationChecks = {
      isNumber : !isNaN(+value),
      noDecimalPoint : /\./.test(value) === false,
      noComma : /,/.test(value) === false,
      /**
       * This prevents users entering in something like '000001'
       */
      correctFormat : (+value).toString().length === value.length,
      onlyValidCharacters : /^\d/.test(value),
    }

    /**
     * All Checks have to pass for this validation function to pass
     */
    const isValid = !Object.values(validationChecks).includes(false);

    return !isValid ? validationChecks: null;
  }
}
