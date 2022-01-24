import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
// import { resolve } from 'dns';
// import { setInterval } from 'timers';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  count=0;
   mysub:Subscription=new Subscription
  
 
  constructor() { }
  

  ngOnInit(): void {
    // const promise=new Promise(resolve=>{
    //   console.log("promises has been called");
    //   setTimeout(()=>
    //   {
    //     resolve("Data 1 from Obserable")
    //     resolve("Data 2 from Obserable")
    //     resolve("Data 3 from Obserable")
    //      resolve("Data 4 from Obserable")
    //      resolve("Data 5 from Obserable")
    //   },1000)
    //   promise.then(result=>{
    //     console.log(result);
        
    //   })
      
    // })
  
  
    // const obserable1=new Observable(sub=>{
    //   console.log(" obserable has been called");
    //   setTimeout(()=>
    //   {
    //     sub.next("Data 1 from Obserable")
    //     sub.next("Data 2 from Obserable")
    //     sub.next("Data 3 from Obserable")
    //      sub.next("Data 4 from Obserable")
    //      sub.next("Data 5 from Obserable")
    //   },1000)
      
    // })
    const obserable1=new Observable(sub=>{
     console.log("observable started");
     
      setInterval(()=>
      {
      //  sub.next(this.count++)
        sub.next(" from obserable data "+this.count++);
        
             },1000)
      
    })
    // obserable1.pipe(filter(data=>data==="Data 2 from Obserable"))
    this.mysub= obserable1.subscribe(result=>{
      console.log(result);
         
       })
       
  //   this.ngOnDestroy()
  //   {
  //   console.log("user destroyed");
  //   this.mysub.unsubscribe()
     
  // }
  
  
  
    localStorage.setItem("value","20")
    //localStorage.getItem("value")
  
  }
  ngOnDestroy(): void {
    console.log("user destroy");
    this.mysub.unsubscribe()
  
  }

}
