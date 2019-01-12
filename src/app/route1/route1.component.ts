import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {
  id;
  value;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.id = params.id
        console.log(this.id);
      }
    )
   }

  ngOnInit() {
    this.route.queryParams.subscribe(
      qParams => {
        this.value = qParams;
        console.log(this.value);
      }
    )
  }

}
