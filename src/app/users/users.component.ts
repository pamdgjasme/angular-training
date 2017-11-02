import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { users } from '../data-model';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
  users = users;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //check if has token
    if (localStorage.getItem('X-Auth-Token') == null) {
      this.router.navigate(['home']);
    }
  }
}
