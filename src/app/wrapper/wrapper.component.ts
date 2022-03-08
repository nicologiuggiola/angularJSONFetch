import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UserGetterService } from '../services/user-getter.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  usersInfo: User[] = [];

  constructor(private users: UserGetterService) { }

  ngOnInit(): void {
    this.showUsers();  
  }

  showUsers() {
    this.users.getUsers().subscribe((data:User[]) => this.usersInfo = [...data]);  
  }
}
