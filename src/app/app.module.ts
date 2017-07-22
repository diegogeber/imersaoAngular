import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { TarefasComponent } from './tarefa/tarefas.component';
import { TarefaNewComponent } from './tarefa/tarefa-new.component';
import { TarefaSearchComponent } from './tarefa/tarefa-search.component';

import { UsuarioService } from './services/usuario.service';
import { TarefaService } from './services/tarefa.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TarefaComponent,
    TarefasComponent,
    TarefaNewComponent,
    TarefaSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsuarioService, TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
