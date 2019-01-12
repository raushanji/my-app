import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { 
  
  }

  ngOnInit() {
  }

  txt: string;
  values: any;

  textVal: string;
 clicked = false;

  textChange = function (): void {

  }

  onKeyUp(event: any): void {
    this.values += event.target.value + '-';
    console.log(event);
  }


  changeCss () {
    this.clicked = !this.clicked;
  }
  





}
