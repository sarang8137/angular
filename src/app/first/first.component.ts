import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  res:any=''
  name="Sarang"
  students=["Amaljith","Akshay","Atheeth"]
  val="apple is red"
  val2="Enter a String"
  two="apple"

  submit(){
    this.res=document.querySelector("#ii")
    console.log(this.res.value)
  }

  new_submit(val:any){
    console.log(val.value)
  }

}
