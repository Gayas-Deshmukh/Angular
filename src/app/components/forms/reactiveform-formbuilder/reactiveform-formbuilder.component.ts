import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-formbuilder',
  templateUrl: './reactiveform-formbuilder.component.html',
  styleUrls: ['./reactiveform-formbuilder.component.css']
})
export class ReactiveformFormbuilderComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  submitted:boolean = false;

  ngOnInit(): void {
  }

  registerForm = this.fb.group({
    uname:["",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    email:["",[Validators.required,Validators.email]],
    phone:["",[Validators.required,Validators.pattern(/\+91[0-9]{10}/)]],
    newControl : this.fb.array([this.fb.control([""])])
  })

  // get form Array
  get controlArray() {
    return this.registerForm.controls['newControl'] as FormArray;
  }

  // add new control
  addControl() {
     this.controlArray.push(this.fb.control([""]));
  }

  // remove control
  removeControl(index : any) {
    this.controlArray.removeAt(index);
  }

  submitForm() {
    this.submitted = true
    console.log(this.registerForm);
  }
}
