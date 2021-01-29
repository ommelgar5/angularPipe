import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todo: boolean = true): string {

    let nombreCompleto = value.toLowerCase();
    let nombres = nombreCompleto.split(' ');

    if(todo){
        nombres = nombres.map((nombre) => nombre[0].toUpperCase() + nombre.substr(1));
    }else{
        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' ');
  }
}
