import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
  res:any=''
  a={}
  i=0
  new_count(a:any){
    this.res=a.value.split()
    console.log(this.res)
  }

}
