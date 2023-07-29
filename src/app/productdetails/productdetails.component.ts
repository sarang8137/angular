import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  pid:any=''
  pro:any=''
  dd=new Date
  constructor(private ar:ActivatedRoute,private ds:DataService){
    ar.params.subscribe(res=>this.pid=res['id'])
    // console.log(this.pid,"details")
    // this.pro=ds.getSpecific(this.pid)
    // console.log(this.pro)
    ds.getSpecific(this.pid).then(res=>res.json()).then(res=>this.pro=res)
    console.log(this.pro)
  }

}
