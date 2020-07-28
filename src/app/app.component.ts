import { Component } from '@angular/core';
/* import { transition } from "@angular/animations"; */
import { RouterOutlet } from '@angular/router';

import { routeTransitionAnimations } from "./app-transition-routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'personalPage';

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
  }
  
}
