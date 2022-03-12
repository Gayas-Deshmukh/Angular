import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-example1',
  templateUrl: './ng-switch-example1.component.html',
  styleUrls: ['./ng-switch-example1.component.css']
})
export class NgSwitchExample1Component implements OnInit {

  userData;any ={ }
  showResult:boolean = false
  userStatus:string = ''
  getData() {
    fetch("https://randomuser.me/api/?results=10").then((resp)=>{
      return resp.json()
    }).then((data)=>{
      console.log(data.results[0])
      this.userData = data.results[0];
      this.showResult =true;
    },(error)=>{
      alert('An unknow error has been occured')
    })
  }
 
  updateUserStatus(status:string) {
    this.userStatus = status;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
