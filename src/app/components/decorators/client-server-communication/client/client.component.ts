import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Input() takeFromServer:string;
  @Output() dataFromClient:any = new EventEmitter();
  clientData:string='';

  sendDataFromClient() {
    this.dataFromClient.emit(this.clientData);
    this.clientData='';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
