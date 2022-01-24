import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  constructor(private route:Router)
   {

    }
  onLogin()
  {
    const a=localStorage.getItem("email1")
    const b=localStorage.getItem("pas1")
    const c=localStorage.getItem("email")
    const d=localStorage.getItem("pas")
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  
    if(a===c && b===d)
    {
      window.alert("successfull")
      return true
    }
    else 
    {
      window.alert("kindly register for login")
      return false
    }
  }

}
