import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  val=true
  val1=10
  val2=12
  students=['sarang','atheeth','akshay','amaljith']

  employees=[
    {id:1,name:"sarang",age:22,position:"Engineer"},
    {id:2,name:"atheeth",age:21,position:"Engineer"},
    {id:3,name:"akshay",age:22,position:"Supervisor"},
    {id:4,name:"amaljiyh",age:23,position:"Accountant"},
  ]

}
