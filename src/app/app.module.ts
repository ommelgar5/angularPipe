import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

// Registrar idiomas disponibles para las fechas
import localEs from  '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   {
     provide: LOCALE_ID,
     useValue: 'es'
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
