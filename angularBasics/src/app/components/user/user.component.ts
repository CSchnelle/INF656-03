import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  //properties
  user: User;

  //Methods
  constructor() {}
  ngOnInit() {
    this.user = {
      firstName: 'Harry',
      lastName: 'Potter',
      email: 'harry@gmial.com',
    };
  }
}