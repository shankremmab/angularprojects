import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const routes:Routes=[
  {path:"",component:ProductDetailsComponent}
]

@NgModule({
  declarations:[ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  
  //exports:[ProductDetailsComponent]
})

export class ProductModule { }
 