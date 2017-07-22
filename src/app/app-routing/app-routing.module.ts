import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaComponent } from '../tarefa/tarefa.component';
import { TarefasComponent } from '../tarefa/tarefas.component';
import { TarefaNewComponent } from '../tarefa/tarefa-new.component';
import { UsuarioComponent } from '../usuario/usuario.component';

const routes: Routes = [
  { path: 'tarefa',  component: TarefaComponent },
  { path: 'tarefas',  component: TarefasComponent },
  { path: 'tarefaNew',  component: TarefaNewComponent },
  { path: 'usuario',     component: UsuarioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
