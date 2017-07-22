import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../shared/tarefa';

@Component({
  selector: 'tarefa-search',
  templateUrl: './tarefa-search.component.html',
  styleUrls: [ './tarefa-search.component.css' ],
  providers: [ TarefaService ]
})
export class TarefaSearchComponent {
  tarefas: Tarefa[];
  private searchTerms = new Subject<string>();

  constructor(
    private tarefaService: TarefaService,
    private router: Router) {}

  search(term: string): void {
     this.tarefaService.search(term)
       .then(tarefas => this.tarefas = tarefas)
  }

  // gotoDetail(tarefa: Tarefa): void {
  //   let link = ['/detail', tarefa.id];
  //   this.router.navigate(link);
  // }
}
