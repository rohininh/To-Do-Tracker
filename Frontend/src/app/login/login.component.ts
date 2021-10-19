import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LayoutComponent } from '../layout/layout.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router:Router, private layoutComp: LayoutComponent, private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  JwtHelper: JwtHelperService = new JwtHelperService();

  userLogin:FormGroup = this.fb.group({
    email:['', Validators.nullValidator],
    password:['',Validators.nullValidator]
   
  })

  // email!:string
  // password!:string

  doLogin(){
    this.authService.loginUser(this.userLogin.value.email, this.userLogin.value.password)
                      .subscribe((res) => {
                        // this.layoutComp.isLoggedIn = true
                        localStorage.setItem('loggedIn', 'true')
                        localStorage.setItem('currentUserID', this.JwtHelper.decodeToken(res.token).sub)
                        console.log(localStorage.getItem('currentUserID'))
                        // alert("Login Successful!")
                        this.layoutComp.ngOnInit()
                        this.router.navigateByUrl('/cards')
                      }), (err: Error) => {
                        console.log(err.message)
                      }
  }

}
