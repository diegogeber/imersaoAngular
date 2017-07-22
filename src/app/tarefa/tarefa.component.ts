import { Tarefa } from './../shared/tarefa';
import { TarefaService } from './../services/tarefa.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
<<<<<<< HEAD
export class TarefaComponent implements OnInit {
  

  constructor(private TarefaService: TarefaService, private Router:Router) { }

  ngOnInit() {
    this.getTarefas;
  }
  
  getTarefas = this.TarefaService.getTarefas();
  
}
=======

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
>>>>>>> 3418ea393557e4f694f1edb6163f38e73d6ddd56
