import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() { }

  onSubmit(myForm:NgForm) {
    console.log(myForm);
  }

  ngOnInit(): void {
  }

}
