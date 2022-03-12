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
import { NgClassExample1Component } from './components/directives/ng-class-example1/ng-class-example1.component';
import { NgStyleExample1Component } from './components/directives/ng-style-example1/ng-style-example1.component';
import { DecoratorsComponent } from './components/decorators/decorators.component';
import { InputDecoratorParentExample1Component } from './components/decorators/input-decorator-parent-example1/input-decorator-parent-example1.component';
import { InputDecoratorChildExample1Component } from './components/decorators/input-decorator-child-example1/input-decorator-child-example1.component';
import { GitHubSearchComponent } from './components/decorators/git-hub-search/git-hub-search.component';
import { SearchComponent } from './components/decorators/git-hub-search/search/search.component';
import { ProfileComponent } from './components/decorators/git-hub-search/profile/profile.component';
import { UserDetailsComponent } from './components/decorators/git-hub-search/user-details/user-details.component';
import { ClientServerCommunicationComponent } from './components/decorators/client-server-communication/client-server-communication.component';
import { ClientComponent } from './components/decorators/client-server-communication/client/client.component';
import { ServerComponent } from './components/decorators/client-server-communication/server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    NgIFExample1Component,
    NgIfexample2UsingThenandElseComponent,
    NgForExample1Component,
    NgForExample2GetAndShowUserDetailsComponent,
    NgSwitchExample1Component,
    NgClassExample1Component,
    NgStyleExample1Component,
    DecoratorsComponent,
    InputDecoratorParentExample1Component,
    InputDecoratorChildExample1Component,
    GitHubSearchComponent,
    SearchComponent,
    ProfileComponent,
    UserDetailsComponent,
    ClientServerCommunicationComponent,
    ClientComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
