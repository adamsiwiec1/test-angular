import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private email: string, private message: string, private name: string ){}
  async sendMail(){
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: 'cal20518@gmail.com',
        pass: '',
      },
    });

    let info = await transporter.sendMail({
      from: '"Chase test" <Cal20518@gmail.com>',
      to: this.email,
      subject: this.name,
      text: this.message,
      html: "<b>Hello</b>",
    });

    console.log("Message sent");
  }
  

  
}
