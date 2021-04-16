import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <!-- header --> 
  <div class="navbar is-dark">
    <!-- logo --> 
    <div class="navbar-brand">
      <a class="navbar-item">
        SiwiecTech
      </a>
    </div>
  </div>

  <!-- routes get injected here -->
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'test-angular';
}
