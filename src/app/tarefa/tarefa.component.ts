import { Tarefa } from './../shared/tarefa';
import { TarefaService } from './../services/tarefa.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})

export class TarefaComponent { }
// export class TarefaComponent implements OnInit {
//
//   tarefas:Tarefa[]
//
//   constructor(private TarefaService: TarefaService, private Router:Router) { }
//
//   ngOnInit() {
//     this.getTarefas();
//   }
//   getTarefas():void{
//     this.TarefaService.getTarefas();
//   }
// }
