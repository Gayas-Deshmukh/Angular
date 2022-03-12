import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ifexample1',
  templateUrl: './ng-ifexample1.component.html',
  styleUrls: ['./ng-ifexample1.component.css']
})
export class NgIFExample1Component implements OnInit {

  constructor() { }

  showHideImg:boolean = false;
  isBike:boolean=false;
  isCar:boolean=false;
  isBus:boolean=false;
  busTicked:string='checked'

  mobileDetails = {
    name:'Iphone13',
    price:15000,
    img:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg'
  }

  setBus(e:any)
  {
    if(e.target.name === 'checked') {
      this.isBus = true;
      this.busTicked = 'unchecked'
    }
    else{
      this.isBus = false;
      this.busTicked = 'checked'
    }
  }

  ngOnInit(): void {
  }

}
