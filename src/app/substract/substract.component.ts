import { Component } from '@angular/core';

@Component({
  selector: 'app-substract',
  templateUrl: './substract.component.html',
  styleUrls: ['./substract.component.css']
})
export class SubstractComponent {
  first:number=0
  second:number=0
  res:number=0
  sub(){
    this.res=this.first-this.second
  }
}
