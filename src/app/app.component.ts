import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: /*html*/ ` 

  <!-- header -->
  
  <app-contact></app-contact>
  

  <!-- routes get injected here -->
  <router-outlet></router-outlet>
  
  <!-- footer --> 
  <app-footer></app-footer>
  ` 
})
export class AppComponent {
  title = 'test-angular';
}
