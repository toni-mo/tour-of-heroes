import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

// import { Hero } from './hero';



@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

    

  // heroes = HEROES;

  // hero : Hero = {
  // 	id: 1,
  // 	name: 'Windstorm'
  // };

  // hero.name = 'Jack';

}
