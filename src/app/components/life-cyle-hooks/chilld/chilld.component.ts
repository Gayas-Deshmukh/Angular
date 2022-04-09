import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-chilld',
  templateUrl: './chilld.component.html',
  styleUrls: ['./chilld.component.css']
})
export class ChilldComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
 @Input() cData : string;

  constructor() { 
    console.log('constructor is called')
  }

  ngOnInit(): void {
    console.log('ngOnInit is called')
  }

  ngOnChanges() {
    console.log('ngOnChanges is called')
  }

  ngDoCheck(): void { 
    console.log('ngDoCheck is called')
  }

  ngAfterContentInit() {
    console.log('ngAfterConntentInit is called')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is called')
  }
}
