import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TarefaComponent } from './tarefa/tarefa.component';

import { UsuarioService } from './services/usuario.service';
import { TarefaService } from './services/tarefa.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsuarioService, TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
