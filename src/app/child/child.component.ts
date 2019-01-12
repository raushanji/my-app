import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  valueFromParent : string;
  @Input()
  valueFromSecond : string;

  @Output()
  childEventValue = new EventEmitter<string>();

  onChange(valueFromChild : string){
    this.childEventValue.emit(valueFromChild);
  }
  
  dateValue = Date();
  
  birthday = new Date(1988, 3, 15);
  toggle = true;

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  

}
