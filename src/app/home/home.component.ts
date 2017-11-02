import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { users } from '../data-model';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import accordion from 'angular-ui-bootstrap/src/accordion';

@Component({

  selector: 'home',
  providers: [ Title ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  users = users;
  error_msg = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { this.createForm(); }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [
      Validators.required,
      Validators.email]
      ],
      password: ['', Validators.required]
    })
  }

  public ngOnInit() {

  }

  public submitState(loginData) {
    //Check if email exists
    // var found = false;
    // var user_obj;
    //
    // found = users.some(function (user) {
    //   if (user.email == loginData.email) {
    //     user_obj = user;
    //     return true
    //   }
    // });
    //
    // if (found) {
    //   //Check if password is correct
    //   if (user_obj.password == loginData.password) {
    //     sessionStorage.setItem('token', 'fgfdrywqsghjy');
    //     this.router.navigate(['users']);
    //   } else {
    //     this.error_msg = 'Invalid login details';
    //   }
    // } else {
    //   this.error_msg = 'Invalid login details';
    // }

    this.http.post<LoginResponse>("http://localhost:2000/api/v1/login", {
      'username': loginData.email,
      'password': loginData.password
    }).subscribe(
      data => {
        // console.log(data);
        localStorage.setItem('X-Auth-Token', data.token)
        localStorage.setItem('user_id', data.id)
        this.router.navigate(['things']);
      }
    )

  }
}

interface LoginResponse {
  id: string,
  token: string
}
