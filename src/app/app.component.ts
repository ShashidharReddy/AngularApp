import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin';
  
  changeName(){

    this.title = 'Shashidhar Reddy';
  }
}
