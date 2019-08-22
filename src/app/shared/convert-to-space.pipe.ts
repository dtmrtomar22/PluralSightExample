
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name : 'convertTospaces'  
})
export class convertTospacesPipe implements PipeTransform {
    transform(value:string,charecter:string):string {
        return value.replace(charecter,' ');
    }
 
}