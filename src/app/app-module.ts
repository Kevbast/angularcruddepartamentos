import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CreateDepartamentosComponent } from './components/create-departamentos.component/create-departamentos.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamento } from './services/service.departamentos';
import { DetailsDepartamentosComponent } from './components/details-departamentos.component/details-departamentos.component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    DepartamentosComponent,
    CreateDepartamentosComponent,
    DetailsDepartamentosComponent
  ],
  imports: [
    FormsModule,//IMPORTAMOS FORMULARIOS
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [//el providehttpclient y los servicios
    provideBrowserGlobalErrorListeners(),provideHttpClient(),ServiceDepartamento
  ],
  bootstrap: [App]
})
export class AppModule { }
