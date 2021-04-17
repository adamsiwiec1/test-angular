import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: /*html*/ ` 

  <!-- header -->
  <app-header></app-header>

  <app-home></app-home>

  <!-- routes get injected here -->
  <router-outlet></router-outlet>
  
  <!-- footer --> 
  <app-footer></app-footer>
  ` 
})
export class AppComponent {
  title = 'test-angular';
}
