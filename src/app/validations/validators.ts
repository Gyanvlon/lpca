import { FormControl } from '@angular/forms';
export class NumberValidators {
  static NumberOnly(c: FormControl) {
    const number = /^[0-9]+$/;
    if (number.test(c.value)) {
      return null;
    } else {
      return { NumberOnly: true };
    }
  }
}
