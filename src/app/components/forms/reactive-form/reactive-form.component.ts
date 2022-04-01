import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  myForm : FormGroup = new FormGroup({
    Name : new FormControl("Gayas"),
    Email : new FormControl(""),
    Mobile : new FormControl("")
  })

  onSubmit() {
    console.log(this.myForm)
  }

  onReSet() {
    this.myForm.reset();
  }

  // it is important set all values if we use setValue Method
  onSetForm() {
    this.myForm.setValue({
      Name:'Rakesh',
      Email:'demo@gmail.com',
      Mobile:'987456321'
    })
  }

  onPatchForm() {
    this.myForm.patchValue({
      Name:'Dipak',
      Mobile:'987456321'
    })
    
  }
  
  ngOnInit(): void {
  }

}
