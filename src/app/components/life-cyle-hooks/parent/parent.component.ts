import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  pData : string ;
  inputData:string

  constructor() { }

  ngOnInit(): void {
  }
 
  sendData() {
    console.log(this.inputData)
    this.pData = this.inputData
    this.inputData=''
  }
}
