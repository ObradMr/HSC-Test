import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../user-model/user.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  userForm: FormGroup = this.userService.userForm;
  // userList!: User[];
  user!: User;
  

  constructor(public userService: UserService, public router: Router ,public route:ActivatedRoute, ) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.params.id;
    
    if(id) {
      this.user = this.userService.getOneUser(Number(id));
      this.userForm.patchValue(this.user);
    }
    
  }


  onSubmit() {
    let addNewUser: User = new User(this.userForm.value);

    if (this.user && this.user.id) {
      confirm('Are you sure?')
      addNewUser.id = this.user.id;
      this.userService.updateUser(addNewUser);
      // console.log(addNewUser);
    } else {
      confirm('Are you sure?')
      this.userService.addUser(addNewUser);
    }
    
    this.userForm.reset();
    this.router.navigate(['usersTable/'])

    
  }

}
