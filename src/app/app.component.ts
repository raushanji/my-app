import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'my-app';

  ngOnInit(){
    sessionStorage.setItem('token','abc');
  }
  data : string = 'SOME DATA FROM THE COMPONENT'

  onClick = function() : void {
    this.data = 'CAHNGED DATA'
  }

  displayComponent = true;

  toggle() {
    this.displayComponent = !this.displayComponent;
  }
  ngOnDestroy(){
    console.log('Destroying component');
  }

}
