import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaComponent } from '../tarefa/tarefa.component';
import { UsuarioComponent } from '../usuario/usuario.component';

const routes: Routes = [
  { path: 'tarefa',  component: TarefaComponent },
  { path: 'usuario',     component: UsuarioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
