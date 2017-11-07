import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map' ;

@Injectable()
export class ProductService{

  private productsData:Product[];
  PRODUCTS_URL = 'http://localhost:8080/shopping/webapi/products';

  
  constructor(private _http:Http){

  }

  public getProducts():Observable<Response>{
    return this._http.get(this.PRODUCTS_URL);
  }
  // public getProducts():Observable<Product[]>{
  //   return this._http.get(this.PRODUCTS_URL).map((response : Response) => <Product[]>response);
  // }

  getProductById(pid:string){
    return this._http.get(this.PRODUCTS_URL + "/" + pid);
  }

  addProduct(newProduct:Product){
    return this._http.post(this.PRODUCTS_URL, newProduct);
  }

  deleteProduct(pid:string){
   return this._http.delete(this.PRODUCTS_URL + "/"+pid);
  }

  
}
