import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  onsignup(form:NgForm)
  {
    localStorage.setItem("email",form.value.regemail)
    localStorage.setItem("pas",form.value.regpas)
      }

  constructor() {

   }

  ngOnInit(): void {
  }

}
