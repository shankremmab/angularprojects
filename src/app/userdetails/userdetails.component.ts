import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User1Service } from '../Service/user1.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  constructor(private user:User1Service) { }
 result:any
  ngOnInit(): void {
   
   
     this.user.getData().subscribe(data=>{
       this.result=data
     })
   
  }

}


