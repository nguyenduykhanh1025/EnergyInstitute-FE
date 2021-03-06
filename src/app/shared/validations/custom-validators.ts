import { FormControl } from "@angular/forms";

export class CustomValidators {
  static onlyNumber(control: FormControl) {

    
    let value = control.value;

    if(!value) {
      return null;
    }

    const phoneRegex = /^[0-9]*$/;
    if (value && phoneRegex.test(value as string)) {
      return null;
    }

    return { onlyNumber: true };
  }
}
