import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from "src/app/student/student.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'student', component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }