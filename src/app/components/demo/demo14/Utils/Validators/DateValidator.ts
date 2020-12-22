import { AbstractControl } from '@angular/forms';

export function DateValidator(control : AbstractControl): {[key: string]: any} | null
{

  let contraintDateMin = new Date(2019,9,1) 
  let contraintDateMax = new Date(2020,12,1) 
  

  if(control.value)
  {
    if(control.value.getTime() < contraintDateMin.getTime())
    {
      return {"error": `La date doit être supérieur au ${convertDate(contraintDateMin)}`}
    }
  
    if(control.value.getTime() > contraintDateMax.getTime())
    {
      return {"error": `La date doit être inférieur au ${convertDate(contraintDateMax)}`}
    }
  }



  return null;
}


function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth()), d.getFullYear()].join('/')
}

