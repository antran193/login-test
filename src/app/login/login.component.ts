import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenService } from '../service/authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ='';
  password: string = '';
  returnUrl: string;
  constructor(private authenservice : AuthenService, private route :ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  sumit() {
    let data ={
      username: this.username,
      password : this.password 
    }
    this.authenservice.login(data);
  }

}
