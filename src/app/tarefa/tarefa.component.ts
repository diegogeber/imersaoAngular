import { Tarefa } from './../shared/tarefa';
import { TarefaService } from './../services/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  

  constructor(private TarefaService: TarefaService, private Router:Router) { }

  ngOnInit() {
    this.getTarefas;
  }
  
  getTarefas = this.TarefaService.getTarefas();
  
}
