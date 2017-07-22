import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TarefaComponent } from './tarefa/tarefa.component';

import { UsuarioService } from "./services/usuario.service";
import { TarefaService } from "./services/tarefa.service";


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TarefaComponent,
    AppRoutingModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsuarioService, TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
