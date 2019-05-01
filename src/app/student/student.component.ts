import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { StudentService } from "src/app/student/student.service";
import { Student } from "src/app/student/student";
import { LoginService } from "src/app/login/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  isLogin: any;
  res: Student[];
  count: number = 0;
  errormsge: any;
  msg: {};
  message:String;
  sortoption: String;
  filterMetadata = { count1 : 0};

  constructor( private studentService: StudentService, private loginService : LoginService,private _router : Router ) { }

  getStudentdata(){
    this.studentService.getStudentList()
    .subscribe(
      ( data ) => {
        this.res = data;
        this.res.forEach(element => {
          if( element.attend== true ){
            this.count = this.count+1;
          }
        });
      },
      error => this.errormsge = <any>error);
  }

  ChangeStatus(student: Student){
    if( student.attend ){
      this.count = this.count-1;
      student.attend = false;
    }
    else{
      this.count = this.count+1;
      student.attend = true;
    }
  }

  ngOnInit() {
   this.loginService.loginstatus.subscribe( isLogin => this.isLogin = isLogin);
   console.log(this.isLogin)
    if( this.isLogin ){
      this._router.navigate(['student']);
      this.getStudentdata();
      this.loginService.username.subscribe( message  => this.message = message );
    }
    else{
      this._router.navigate(['']);
    }
  }

}
