import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-hub-search',
  templateUrl: './git-hub-search.component.html',
  styleUrls: ['./git-hub-search.component.css']
})
export class GitHubSearchComponent implements OnInit {
  userData :any
  dataFound:boolean=false;
  getDataFromChild(data:any) {
   this.userData = data;
   this.dataFound=true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
