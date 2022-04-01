import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../service/product-list.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProductDetails :any[]=[]
  constructor( private productList: ProductListService) { }

  ngOnInit(): void {
    this.productList.getProductDetails().then((resp)=>{
      return resp.json()
    }).then( data => {
      this.allProductDetails = data;
    })
  }

}
