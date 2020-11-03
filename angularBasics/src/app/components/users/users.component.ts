import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    birthDay: null,
  };
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  currentClasses = {};

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'Harry',
        lastName: 'Potter',
        email: 'harry@gmail.com',
        hide: true,
        isActive: false,
        birthDay: new Date('01/01/2020 09:30:00'),
      },
      {
        firstName: 'Ron',
        lastName: 'Wesley',
        email: 'rom@gmail.com',
        hide: true,
        isActive: true,
        birthDay: new Date('01/02/2020 08:30:00'),
      },
      {
        firstName: 'Sirius',
        lastName: 'Black',
        email: 'sirius@gmail.com',
        hide: true,
        isActive: false,
        birthDay: new Date('01/03/2020 10:30:00'),
      },
    ];
    this.loaded = true;
    this.showExtended = true;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not Valid');
    } else {
      value.isActive = true;
      value.birthDay = new Date();
      value.hide = true;
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
