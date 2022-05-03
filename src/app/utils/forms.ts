import { FormArray, FormGroup } from '@angular/forms';

export function showFieldErrs(form: FormGroup, fieldName: string) {
  const field = form.get(fieldName);
  return field && field.invalid && field.errors && (field.dirty || field.touched);
}

export function showFormErrs(form: FormGroup) {
  return form.invalid && form.errors && (form.dirty || form.touched);
}

export function fieldHasErr(form: FormGroup, fieldName: string, errKey: string) {
  const field = form.get(fieldName);
  return field && field.hasError(errKey);
}

export function markControlsAsTouched(rootControl: FormGroup | FormArray,
  visitChildren: boolean = true) {

  let stack: (FormGroup | FormArray)[] = [];

  // Stack the root FormGroup or FormArray
  if (rootControl &&
    (rootControl instanceof FormGroup || rootControl instanceof FormArray)) {
    stack.push(rootControl);
  }

  while (stack.length > 0) {
    let currentControl = stack.pop() as FormGroup | FormArray;
    Object.values(currentControl.controls).forEach((control) => {
      // If there are nested forms or formArrays, stack them to visit later
      if (
        visitChildren
        && (control instanceof FormGroup || control instanceof FormArray)
      ) {
        stack.push(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
