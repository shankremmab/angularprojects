import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AgePipe } from './pipes/age.pipe';
import { UserDassboardComponent } from './user-dassboard/user-dassboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Guards/auth.guard';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductModule } from './product/product.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContctusComponent } from './contctus/contctus.component';
import { Assign1Component } from './assign1/assign1.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AgePipe,
    UserDassboardComponent,
    LoginComponent,
    RegistrationComponent,
    UserdetailsComponent,
    AboutComponent,
    HomeComponent,
    ContctusComponent,
    Assign1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
