import { Component, OnInit } from '@angular/core';

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
  ) { }

  getTarefas(): void {
    this.tarefaService.getTarefas().then(tarefas => this.tarefas = tarefas);
  }

  ngOnInit(): void {
    this.getTarefas();
  }
}
