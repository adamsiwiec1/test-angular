import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: /*html*/`
    <section class="hero is-primary is-bold is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">Home Page</h1>
    </div>
  </div>
  </section>
`,
styles: [`
  .hero {

    /* Style */

    background-image: url('/assets/plasma.jpg') !important; 
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    background-color: #464646; 
  



    

    /* Position & formating */
    position: fixed;
    top: 0;
    left: 0;



    /* Preserve aspect ratio*/
    min-width: 100%;
    min-height: 100%;

  }
`
]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
