import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: /*html*/ ` 
  <!-- header --> 
  <div class="navbar is-dark">
    <!-- logo --> 
    <div class="navbar-brand">
      <a class="navbar-item">
        SiwiecTech
      </a>
    </div>
  </div>
  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
