import { AbstractControl } from '@angular/forms';


export function LoginValidator(control: AbstractControl): {[key: string]: any} | null
{

  if(control.value == "test") return { 'error': "Je suis certain que vous ne vous appelez pas 'test'" };

  
  if (control.value && control.value.length < 2) return { 'error': "Veuillez entrer au minimum 2 caractère" };

  return null;

}