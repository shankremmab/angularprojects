import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onlogin1(lform:NgForm)
  {
    localStorage.setItem("email1",lform.value.loginemail)
    localStorage.setItem("pas1",lform.value.loginpas)
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
