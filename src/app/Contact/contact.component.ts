import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: "./contact.component.html"
})
export class ContactComponent {
  name;
  email;
  message;
  constructor(){}

  ngOnInit(){}
  
  submitForm() {
    const message = `My name is ${this.name}`;
      alert(message);
  }
}