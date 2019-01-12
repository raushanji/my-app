import { Component, OnInit } from '@angular/core';
import { HeroList } from '../hero-list';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title : string;

  constructor() {

    this.title = 'Tour of  my Heroes';
   }

  ngOnInit() {
  }

  heroes = [
    new HeroList(1, 'Raushan'),
    new HeroList(4, 'Rajesh'),
    new HeroList(6, 'Rakesh'),
    new HeroList(9, 'Urmilla'),
    new HeroList(13, 'Nitish')
  ];
  myHero = this.heroes[0];

  

}
