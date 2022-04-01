import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../service/product-list.service';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {

  elecronicData:any[]=[]
  constructor(private productList : ProductListService ) { }

  ngOnInit(): void {
    this.getElectronicData()
  }

  getElectronicData() {
    this.productList.getElectronicsProducts().subscribe(actualData =>{
      this.elecronicData = actualData
      console.log(this.elecronicData)
    })
  }
}
