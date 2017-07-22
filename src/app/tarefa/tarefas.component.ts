import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tarefa } from '../shared/tarefa';
import { TarefaService} from '../services/tarefa.service';

@Component({
  selector: 'my-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: [ './tarefas.component.css' ]
})
export class TarefasComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  getTarefas(): void {
    this.tarefaService.getTarefas().then(tarefas => this.tarefas = tarefas);
  }

  delete(tarefa: Tarefa): void {
    this.tarefaService.delete(tarefa.id)
      .then(() => {
        this.tarefas = this.tarefas.filter(h => h !== tarefa);
      });
  }

  ngOnInit(): void {
    this.getTarefas();
  }
}
