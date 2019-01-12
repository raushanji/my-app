import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('THE COMPONENT IS INITIALISED');
  }

  ngOnDestroy(){
    console.log('THE COMPONENT IS DESTROYED');
  }

}
