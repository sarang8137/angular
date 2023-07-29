import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products:any=[]
  constructor(private r:Router,private ds:DataService){
    console.log("page loading")
    // this.products=ds.getdata()
    ds.getdata().then(res=>res.json()).then(res=>this.products=res)

  }



  clicked(e:any){
    console.log(e.target.id)
    this.r.navigate(['proddet',e.target.id])
  }

}
