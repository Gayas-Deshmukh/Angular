import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userName:string=''
  @Output() dataFromChild :any = new EventEmitter();
  getUserData() {
    fetch(`https://api.github.com/users/${this.userName}`).then((resp => {
      return resp.json()
    })).then((data) => {
      console.log(data);
      this.dataFromChild.emit(data);
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
