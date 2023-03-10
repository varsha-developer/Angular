import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get("http://localhost:3000/product")
  }
  postProduct(obj:any){
    return this.http.post("http://localhost:3000/product/",obj)
  }

  update(id:any, obj:any){
    return this.http.put("http://localhost:3000/product/"+ id, obj)
  }

  delete(id:any){
    return this.http.delete("http://localhost:3000/product/"+id)
  }
}
