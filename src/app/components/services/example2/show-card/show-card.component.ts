import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

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
