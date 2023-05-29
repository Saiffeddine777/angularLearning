import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Go Gym';
  description ="this application dedicated to the local gym in my hood"


  lionel(){
    return "lionel"
  }
}
