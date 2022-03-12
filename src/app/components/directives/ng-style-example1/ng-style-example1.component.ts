import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example1',
  templateUrl: './ng-style-example1.component.html',
  styleUrls: ['./ng-style-example1.component.css']
})
export class NgStyleExample1Component implements OnInit {
 
  circleStyle:any = {
    position :'',
    left:'',
    top:'',
  }

  backGround :any = {
    backgroundColor :''
  }
 

  changeProperties(event : any) {
    this.circleStyle = {
      position : 'fixed',
      left : event.clientX + 'px',
      top: event.clientY + 'px'
    }
    
    this.backGround = {
      backgroundColor :'green'
    }
  }

  removeProperties() {
    this.circleStyle = {
      position :'',
      left:'',
      top:'',
    }
    
    this.backGround = {
      backgroundColor :''
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
