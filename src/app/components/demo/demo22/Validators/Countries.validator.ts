import { AsyncValidatorFn } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map, delay } from 'rxjs/operators';


export class CountriesValidators {

    static readonly URL:string =
        'https://restcountries.eu/rest/v2/all';

    public static checkCountry(client: HttpClient) : AsyncValidatorFn  {
        return (control) => {
            return client.get<any>(this.URL)
                .pipe(
                    map(responceAPI => 
                    {
                        if(responceAPI.find(country => country.name == capitalizeFirstLetter(control.value)))
                            return { countryExist: true }

                        else
                            return null
                    }
                ));
        }
    }
}

function capitalizeFirstLetter(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}