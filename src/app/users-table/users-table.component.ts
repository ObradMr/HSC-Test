import { User } from './../user-model/user.model';
import { UserService } from './../Services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  displayedColumns: string[] = [ 'firstName', 'lastName', 'userName', 'email', 'phone', 'address', 'salary', 'edit', 'remove',];
  dataSource: any;
  searchKey!: string;

  sumSalary: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  
  
  
    
  constructor(public userService:UserService, public  router:Router) { }
    
  ngOnInit(): void {
    this.init();

  }
    
  init() {
    this.dataSource = this.userService.getUsersFromLS();
    this.dataSource.forEach((element: { salary: any; }) => {
      this.sumSalary += element.salary
      console.log(this.sumSalary);
      
    });
    
  }

  onDelete(id: number) {
    confirm('Are you sure?')
    this.userService.remove(id);
    this.init();
  }

  onEdit(id: number) {
    this.router.navigate(['usersTable/', id]);
  }

  
  
}
