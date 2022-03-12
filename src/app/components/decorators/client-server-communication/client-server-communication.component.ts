import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-server-communication',
  templateUrl: './client-server-communication.component.html',
  styleUrls: ['./client-server-communication.component.css']
})
export class ClientServerCommunicationComponent implements OnInit {
   dataToServer:string;
   dataToClient:string;

  clientData(data:any) {
      this.dataToServer = data;
  }

  serverData(data:any) {
   this.dataToClient= data;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
