import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from "src/app/login/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginStatus: boolean;
  LoginValue: boolean;
  isLogin: boolean = false;
  invalidcred: string;
  loginForm: FormGroup;
  name = 'shashidhar';
  message: string;

  constructor( private formBuilder:FormBuilder,private _router : Router, private loginService: LoginService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password:['', Validators.required]
    })

    this.loginService.username.subscribe( message => this.message = message );
  }
submitted(){
  let username = this.loginForm.get('UserName').value;
  let Password = this.loginForm.get('Password').value;
  if (this.loginService.isAuthenticated( username, Password )){
          this.isLogin = true;
          this._router.navigate(['/student']);
          this.loginService.changeUsername( this.loginForm.get('UserName').value );
          this.loginService.changeLoginStatus( this.isLogin );
  } else {
          this.invalidcred = 'Invalid cred';
  }
 }
}
