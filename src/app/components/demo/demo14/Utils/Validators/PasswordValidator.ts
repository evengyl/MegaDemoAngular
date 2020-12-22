import { AbstractControl } from '@angular/forms';


export function PasswordValidator(control: AbstractControl): {[key: string]: any} | null
{
    if(control.value == "test1234") return { 'error': "Votre mot de passe ne peux pas être aussi simple" };
    if(control.value && control.value.length < 6) return { 'error': "Votre mot de passe ne peux contenir moins de 6 caratères" };
    return null;
    
}