import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value) {
   var curYear=new Date().getFullYear()
   var userYear=new Date(value).getFullYear()
   var age=curYear-userYear
    return age
  }

}
