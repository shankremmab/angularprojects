import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContctusComponent } from './contctus/contctus.component';
import { AuthGuard } from './Guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDassboardComponent } from './user-dassboard/user-dassboard.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dassboard',component:UserDassboardComponent,canActivate:[AuthGuard]},
  {path:'registration',component:RegistrationComponent},
  {path:"**",component:LoginComponent}

];
// const routes: Routes = [
//   {path:"",redirectTo:'login',pathMatch:'full'},
//   {path:'about',component:AboutComponent},
//   {path:'contactus',component:ContctusComponent},
//   {path:'home',component:HomeComponent},
//   {path:"product",loadChildren:"./product/product.module#ProductModule"}

// ]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
