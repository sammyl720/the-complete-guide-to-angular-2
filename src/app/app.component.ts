import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeRoute: string = "recipes"
  handleRouteChange(event){
    this.activeRoute = event.route
  }
}
