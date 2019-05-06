import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

export function isRequiredValidator(id, title): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Get first control value
      const value1 = control.get(id).value;
      // Get second control value
      const value2 = control.get(title).value;

      if (!(value1 || value2)) {
        return { 
            'isrequired' : { value : control.value }, 
            
        };
      } else {
        return null;
      }
    };
  }