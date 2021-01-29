import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, enmascarar: boolean): string {
    if(enmascarar){
      // return value.replace(new RegExp(/./ig), '*');
      return '*'.repeat(value.length);
    }
    return value;
  }

}
