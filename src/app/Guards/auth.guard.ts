import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { window } from 'rxjs/operators';
import { AssignService } from '../Services/assign.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private guard:AssignService){}
  canActivate()
    {
       if(this.guard.onLogin()){
         alert("allow to dashboard")
         return true
       }
       else{
         alert("not allow")
         return false
       }
       
  }
  
}
