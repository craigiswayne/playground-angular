import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function onlyWholeNumbersValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    if (!control.value) {
      return null;
    }

    const controlStringValue = control.value.toString();

    const validationChecks = {
      isNumber : !isNaN(+controlStringValue),
      noDecimalPoint : /\./.test(controlStringValue) === false,
      noComma : /,/.test(controlStringValue) === false,
      /**
       * This prevents users entering in something like '000001'
       */
      correctFormat : (+controlStringValue).toString().length === controlStringValue.length,
      onlyValidCharacters : /^\d/.test(controlStringValue),
    }

    /**
     * All Checks have to pass for this validation function to pass
     */
    const isValid = !Object.values(validationChecks).includes(false);

    return !isValid ? validationChecks: null;
  }
}
