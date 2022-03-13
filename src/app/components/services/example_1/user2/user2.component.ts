import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  serviceData:string='';
  constructor(private userService : UserServiceService) { }

  getData() {
    this.serviceData = this.userService.nameOfUser;
  }

  ngOnInit(): void {
  }

}
