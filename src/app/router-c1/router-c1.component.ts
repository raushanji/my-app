import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-c1',
  templateUrl: './router-c1.component.html',
  styleUrls: ['./router-c1.component.css']
})
export class RouterC1Component implements OnInit {
  id = 12;
  abc="sample@gmail.com";
  constructor() { }

  ngOnInit() {
  }

}
