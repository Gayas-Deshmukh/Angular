import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NgIFExample1Component } from './components/directives/ng-ifexample1/ng-ifexample1.component';
import { NgIfexample2UsingThenandElseComponent } from './components/directives/ng-ifexample2-using-thenand-else/ng-ifexample2-using-thenand-else.component';
import { NgForExample1Component } from './components/directives/ng-for-example1/ng-for-example1.component';
import { NgForExample2GetAndShowUserDetailsComponent } from './components/directives/ng-for-example2-get-and-show-user-details/ng-for-example2-get-and-show-user-details.component';
import { NgSwitchExample1Component } from './components/directives/ng-switch-example1/ng-switch-example1.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    NgIFExample1Component,
    NgIfexample2UsingThenandElseComponent,
    NgForExample1Component,
    NgForExample2GetAndShowUserDetailsComponent,
    NgSwitchExample1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
