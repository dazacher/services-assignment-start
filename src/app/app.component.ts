import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUsers: {name: string}[] = [];
  // inactiveUsers: {name: string}[] = [];

  constructor(private usersService: UsersService){}

  // ngOnInit() {
  //   this.activeUsers = this.usersService.activeUsers;
  //   this.inactiveUsers = this.usersService.inactiveUsers;
  // }
}
