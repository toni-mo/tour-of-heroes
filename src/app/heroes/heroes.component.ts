import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';



@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero;
  selectedHero: Hero;
	// heroes = HEROES;
  heroes: Hero[];

 // bob = HEROES;
 
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    
    this.getHeroes();
    console.log(this.heroes);
  }

  onSelect(hero: Hero): void{

    // alert("Hero is selected");
    this.selectedHero = hero;
    console.log(this.selectedHero);
    
  }

}
