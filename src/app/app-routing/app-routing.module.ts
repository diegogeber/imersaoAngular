import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaComponent } from '../tarefa/tarefa.component';
import { UsuarioComponent } from '../usuario/usuario.component';

const routes: Routes = [
  { path: 'tarefa',  component: TarefaComponent },
  { path: 'usuario',     component: UsuarioComponent }
];

@NgModule({
<<<<<<< HEAD
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
=======
  imports: [ RouterModule.forRoot(routes) ],
>>>>>>> 3418ea393557e4f694f1edb6163f38e73d6ddd56
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
