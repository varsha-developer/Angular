import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productList:any

 
  constructor(private serv:ApiService) { }

  ngOnInit(): void {
    this.getallProduct()
  }
getallProduct(){
this.serv.getProduct().subscribe((resp)=>{
  console.log(resp)
this.productList = resp
})
}

// add(item:any){
//  let obj ={
//       id:this.productList.value.id,
//       title:this.productList.value.title,
//       price:this.productList.value.price,
//       description:this.productList.value.description,
//       image:this.productList.value.image,
//       category:this.productList.value.category,
//       rating:this.productList.value.rating
//  }
//   this.serv.postProduct(obj).subscribe((resp)=>{
//     console.log(resp)
//     this.getallProduct()
//   })
//   this.getallProduct()
// }

add(item:any){
  let obj = this.productList.value
     this.serv.postProduct(obj).subscribe((resp)=>{
     console.log(resp)
     
     this.getallProduct()
   })
   this.getallProduct()
 }


deleteProduct(item:any){
  this.serv.delete(item.id).subscribe((resp)=>{
    console.log(resp)
  })


this.getallProduct()
}
}


