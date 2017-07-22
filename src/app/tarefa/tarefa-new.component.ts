import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'tarefa-create',
  templateUrl: './tarefa-new.component.html'
})

export class TarefaNewComponent {

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  add(titulo: string, descricao: string): void {
    titulo = titulo.trim();
    descricao = descricao.trim();
    if (!descricao || !descricao) { return; }
    this.tarefaService.create(titulo, descricao);
    this.router.navigate(['/tarefas']);
  }
}
