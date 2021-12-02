import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [
  { path: 'createUser', component: AddEditUserComponent },
  { path: 'usersTable', component: UsersTableComponent },
  { path: 'usersTable/:id', component: AddEditUserComponent },
  { path: '', redirectTo: '/usersTable', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
