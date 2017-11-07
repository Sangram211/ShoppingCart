import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";

@Component({
  templateUrl:'./details.component.html' 
})
export class DetailsComponent{

  //dtProduct:Product = new Product('', '', 0, '');
  dtProduct:Product;
  statusMsg : String ;
  constructor(private actroute:ActivatedRoute, private ps:ProductService, private router:Router){
    let pathId = this.actroute.snapshot.params['prodId'];
    //console.log(pathId);
    this.ps.getProductById(pathId).subscribe(
      (jsonresp) => {
        //console.log(jsonresp)

        this.dtProduct = jsonresp.json();
        if(this.dtProduct == null){
          this.statusMsg="No data present for this id";
        }
        
      },
      (err) => {
        this.statusMsg="some problem happened";
        console.error(err)
      }
    );
  }

  goBack(){
    this.router.navigate(['/list']);
  }
}
