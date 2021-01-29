import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Capitán América';
  numeros: string[] = ['Iroman','Spiderman','Thor', 'Capitán America', 'Hulk']
  PI: number = Math.PI;
  porcentaje: number = 0.24557;
  salario: number = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverin',
    edad: 600,
    direccion: {
      calle: 'Primera Calle',
      casa: 20
    }
  }

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(()=>{
        resolve('Llego la data');
    },3000);
  });


  fecha: Date = new Date();

  idioma: string = 'es';

  nombre2: string = 'oScAr cEcIliO ORTIZ MelGaR';

  videoURL: string = 'https://www.youtube.com/embed/sgFQjRL5niY';

  activar: boolean = true;

}
