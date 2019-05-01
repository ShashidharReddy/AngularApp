import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isloggedin: boolean = false;

  private source = new BehaviorSubject<string>( "Admin" );
  username = this.source.asObservable();

  constructor() { }

  changeUsername( message: string ){
      this.source.next( message );
  }

  isAuthenticated( Username, Password ): boolean {

    if( Username != '' && Password != ''){
      this.isloggedin =true;
    }
    else{
      this.isloggedin = false;
    }
    return this.isloggedin;
  }

  //new

  private source1 = new BehaviorSubject<boolean>( false );
  loginstatus = this.source1.asObservable();

  changeLoginStatus( isLogin: boolean ){
    this.source1.next( isLogin );
}
}
