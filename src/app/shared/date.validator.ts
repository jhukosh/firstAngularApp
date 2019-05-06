import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

export function rangeDateValidator(min, max): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value < min || control.value > max) {
        return { 
            'min' : [
                { valueMin : min},
                {valueMax : max}
            ]
        };
      } else {
        return null;
      }
    };
  }