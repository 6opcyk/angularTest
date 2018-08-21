import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReposComponent } from './repos/repos.component';


const appRoutes: Routes = [
    {path: "", component: UsersListComponent},
    {path: "repos/:login", component: ReposComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ReposComponent,
  ],
  imports: [ 
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
