import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  usersDetails : any[] =[]

  constructor(private users : UserServiceService) { }

  fetchUsers() {
     this.users.getUserData().then( resp =>{
       return resp.json()
     }).then(data =>{
       console.log(data.results);
       this.usersDetails = data.results; 
     })

  }

  hideUsers() {
    this.usersDetails =[];
  }
  ngOnInit(): void {
  }

}
