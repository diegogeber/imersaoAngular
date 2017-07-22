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

  ngOnInit(): void {
    this.getTarefas();
  }

  // heroes: Hero[];
  // selectedHero: Hero;
  //
  // constructor(
  //   private heroService: HeroService,
  //   private router: Router) { }
  //
  // getHeroes(): void {
  //   this.heroService
  //     .getHeroes()
  //     .then(heroes => this.heroes = heroes);
  // }
  //
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }
  //
  // delete(hero: Hero): void {
  //   this.heroService
  //     .delete(hero.id)
  //     .then(() => {
  //       this.heroes = this.heroes.filter(h => h !== hero);
  //       if (this.selectedHero === hero) { this.selectedHero = null; }
  //     });
  // }
  //
  // ngOnInit(): void {
  //   this.getHeroes();
  // }
  //
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  //
  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }
}
