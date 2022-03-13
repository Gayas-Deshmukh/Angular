import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  nameOfUser:string;
 
  getUserData() {
    return fetch("https://randomuser.me/api/?results=8");
  }
  constructor() { }
}
