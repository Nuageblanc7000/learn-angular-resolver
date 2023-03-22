import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateLimit(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = control.value;
    const yearDate = new Date(date).getFullYear();
    const now = new Date().getFullYear();

    console.log(now - yearDate);
    if (!date) {
      return null;
    }
    return now - yearDate < 13 ? { date: true } : null;
  };
}
