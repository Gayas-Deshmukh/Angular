import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example1',
  templateUrl: './ng-class-example1.component.html',
  styleUrls: ['./ng-class-example1.component.css']
})
export class NgClassExample1Component implements OnInit {

  data : string = '';
  changetheme:boolean=false;

  sendData(inputRef) {
    this.data = inputRef.value;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
