import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator-parent-example1',
  templateUrl: './input-decorator-parent-example1.component.html',
  styleUrls: ['./input-decorator-parent-example1.component.css']
})
export class InputDecoratorParentExample1Component implements OnInit {

  data:string='';
  parentData:string;

  sendParentData() {
    this.parentData = this.data;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
