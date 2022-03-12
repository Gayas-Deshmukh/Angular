import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator-child-example1',
  templateUrl: './input-decorator-child-example1.component.html',
  styleUrls: ['./input-decorator-child-example1.component.css']
})
export class InputDecoratorChildExample1Component implements OnInit {

 // @Input() dataToChild:string
 @Input('dataFromParent') data:string;
  constructor() { }

  ngOnInit(): void {
  }

}
