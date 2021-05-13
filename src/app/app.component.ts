import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// root component of our application
export class AppComponent {

  public message: any;
  public setterString = "";
}
