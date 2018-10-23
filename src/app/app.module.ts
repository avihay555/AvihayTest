import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginUser } from 'src/app/user';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CompotitionComponent } from './compotition/compotition.component';
import { CompotitionRegisterComponent } from './compotition-register/compotition-register.component';
import { CompotitionsComponent } from './compotitions/compotitions.component';

const appRoutes: Routes=[
{path:'login',component:LoginComponent},
{path:'user',component:UserComponent},
{path:'compotitions',component:CompotitionComponent}
];

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true})
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    UserComponent,
    CompotitionComponent,
    CompotitionRegisterComponent,
    CompotitionsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
