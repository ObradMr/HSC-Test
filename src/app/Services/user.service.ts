import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from '../user-model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: User[];
  userList = this.getUsersFromLS();
  

  
  
  constructor() { }


  userForm: FormGroup = new FormGroup({
    
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(null, Validators.required),
    address: new FormControl('', Validators.required),
    salary: new FormControl(null, Validators.required),
  });

  

  getUsersFromLS() {
    return JSON.parse(localStorage.getItem('users')!) || [];
  }

  getOneUser(id: number): User {
    let user = this.userList.find((user: { id: number; }) => user.id == id);
    return user;
  }

  addUser(user: User) {
    let lastUserId : number; 
    if(this.userList.length === 0) {
      user.id = 1;
    } else {
      lastUserId = this.userList[this.userList.length-1].id;
      user.id = lastUserId + 1;
    }

    this.userList.push(user);
    localStorage.setItem('users', JSON.stringify(this.userList))

  }

  remove(id: number) {
     this.userList;
    for (let i = 0; i < this.userList.length; i++) {
      if(this.userList[i].id === id) {
        this.userList.splice(i, 1);
      }
    }
    localStorage.setItem('users', JSON.stringify(this.userList));
  }

  updateUser(editedUser: User) {
    console.log(editedUser);
    
  }


}
