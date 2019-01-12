import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuComponent } from './submenu/submenu.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { RouterModule } from '@angular/router';
import { Comp4Component } from './comp4/comp4.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([

      {
        path: '', 
        component: SubmenuComponent,
        children: [
          {
            path: 'comp1', component: Comp1Component
          },
          {
            path: 'comp2', component: Comp2Component
          },
          {
            path: 'comp3', component: Comp3Component
          }
        ]
      }

    ])
  ],
  declarations: [SubmenuComponent,Comp1Component,Comp2Component,Comp3Component, Comp4Component]
})
export class TestingModuleModule { }
