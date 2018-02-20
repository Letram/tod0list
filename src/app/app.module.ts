import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {PrioridadComponent} from "./prioridad.component";
import {OrdenaTareasPipe} from "./shared/ordenaTareas.pipe";
import { FiltroDonePipe } from './filtro-done.pipe';
import { CallbackhellComponent } from './callbackhell/callbackhell.component';
import { ReactiveComponent } from './reactive/reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    PrioridadComponent,
    OrdenaTareasPipe,
    FiltroDonePipe,
    CallbackhellComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
