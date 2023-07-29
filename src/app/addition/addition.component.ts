import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  res:any=''
  new_add(a1:any,a2:any){
    console.log(a1.value)
    console.log(a2.value)
    this.res=Number(a1.value)+Number(a2.value)
  }
  
 
}
