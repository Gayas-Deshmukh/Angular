import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
 @Input() takenFromClient:string;
 @Output() dataFromServer:any = new EventEmitter();
 serverData:string='';

 sendDataFromServer() {
   this.dataFromServer.emit(this.serverData);
   this.serverData='';
 }
  constructor() { }

  ngOnInit(): void {
  }

}
