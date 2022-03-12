import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example1',
  templateUrl: './ng-for-example1.component.html',
  styleUrls: ['./ng-for-example1.component.css']
})
export class NgForExample1Component implements OnInit {


  mobilesData = [{
    mobile:'Iphone',
    brand:['Iphone12','Iphone13','Iphone 12 pro']
  },{
    mobile:'Samsung',
    brand:['SamsungJ12','Samsung Note']
  },{mobile:'Xiome',
    brand:['Redmi Note12','Redmi A15']
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
