import { Routes } from '@angular/router';

import { UsuarioComponent } from "../usuario/usuario.component";
import { TarefaComponent } from "../tarefa/tarefa.component";

export const routes: Routes = [
    {path: 'user', component: UsuarioComponent},
    {path: 'todo', component: TarefaComponent},
    {path: '', redirectTo: 'user', pathMatch: 'full'}
];