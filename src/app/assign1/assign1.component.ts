import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-assign1',
  templateUrl: './assign1.component.html',
  styleUrls: ['./assign1.component.css']
})
export class Assign1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var select=document.getElementById("select")
    console.log(select);
    
  }
  

}
