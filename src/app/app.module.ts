import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

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
import { ServicesComponent } from './components/services/services.component';
import { User1Component } from './components/services/example_1/user1/user1.component';
import { User2Component } from './components/services/example_1/user2/user2.component';
import { ShowTableComponent } from './components/services/example2/show-table/show-table.component';
import { ShowCardComponent } from './components/services/example2/show-card/show-card.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormValidationComponent } from './components/forms/form-validation/form-validation.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { ReactiveformFormbuilderComponent } from './components/forms/reactiveform-formbuilder/reactiveform-formbuilder.component';

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
    ServerComponent,
    ServicesComponent,
    User1Component,
    User2Component,
    ShowTableComponent,
    ShowCardComponent,
    FormsComponent,
    FormValidationComponent,
    ReactiveFormComponent,
    ReactiveformFormbuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
