import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  userName:string=''
  dataSent:boolean=false;

  constructor(private userService : UserServiceService) { }

  sendData() {
    this.userService.nameOfUser= this.userName;
    this.userName='';
    this.dataSent=true;

    setTimeout(()=>{
      this.dataSent=false
    },1000)
  }



  ngOnInit(): void {
  }

}
