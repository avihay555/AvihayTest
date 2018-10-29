import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginUser } from 'src/app/user';
import { empty } from 'rxjs/internal/observable/empty';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginUser;
  userName: string;
  password: string;
  constructor() {
  }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.password + this.userName);
  }

}
