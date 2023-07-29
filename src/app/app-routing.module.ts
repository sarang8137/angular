import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './first/first.component'
import { SecondComponent } from './second/second.component';
import { AdditionComponent } from './addition/addition.component';
import { WordComponent } from './word/word.component';
import { SubstractComponent } from './substract/substract.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';



const routes: Routes = [
  {path:'fst',component:FirstComponent},
  {path:'sec',component:SecondComponent},
  {path:'add',component:AdditionComponent},
  {path:'word',component:WordComponent},
  {path:'sub',component:SubstractComponent},
  {path:'prod',component:ProductComponent},
  {path:'proddet/:id',component:ProductdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
