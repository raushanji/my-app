import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { HeroComponent } from './hero/hero.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CityComponent } from './city/city.component';
import { FilterPipe } from './pipes/filter.pipe';
import { TestPipe } from './pipes/test.pipe';
import { FastPipe } from './pipes/fast.pipe';
import { UsersService } from './services/users.service';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RouterC1Component } from './router-c1/router-c1.component';
import { RouterC2Component } from './router-c2/router-c2.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { TestGuardGuard } from './authGuard/test-guard.guard';

const appRoutes: Routes = [
  { path: 'router1', component: RouterC1Component },
  { path: 'router2', component: RouterC2Component },
  { path: 'route1', component:  Route1Component },
  { path: 'route2', component:  Route2Component },
  { path: 'router1/:id', component: Route1Component},
  { path: 'test',
    canActivate: [ TestGuardGuard ], 
    loadChildren: './testing-module/testing-module.module#TestingModuleModule'},
  
  { path: '',
    redirectTo: 'router1',
    pathMatch: 'full'
  },
  { path: '**', component:  PagenotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    TwoWayBindingComponent,
    HeroComponent,
    ParentComponent,
    ChildComponent,
    CityComponent,
    FilterPipe,
    TestPipe,
    FastPipe,
    LifecycleComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    RouterC1Component,
    RouterC2Component,
    PagenotFoundComponent,
    Route1Component,
    Route2Component,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,
      //{enableTracing:true}
      )

  ],
  providers: [UsersService, TestGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
