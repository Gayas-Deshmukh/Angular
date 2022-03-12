import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example2-get-and-show-user-details',
  templateUrl: './ng-for-example2-get-and-show-user-details.component.html',
  styleUrls: ['./ng-for-example2-get-and-show-user-details.component.css']
})
export class NgForExample2GetAndShowUserDetailsComponent implements OnInit {
  showTable:boolean = false;
  userData:any=[];
  filterUserdata:any=[];
  
  getUserData() {
    //this.showTable =true;
    fetch("https://randomuser.me/api/?results=10").then((resp)=>{
      return resp.json()
    }).then((data)=>{
      console.log(data.results)
      this.userData = data.results;
      this.filterUserdata = data.results
      this.showTable =true;
    },(error)=>{
      alert('An unknow error has been occured')
    })
  }

  getAllUser() {
    this.filterUserdata = this.userData;
  }

  getMaleUserData() {
    this.filterUserdata = this.userData.filter(data => data.gender === 'male');
  }

  getFemaleUserData() {
    this.filterUserdata = this.userData.filter(data => data.gender === 'female');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
