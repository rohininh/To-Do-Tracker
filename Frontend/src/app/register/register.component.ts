import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.authService.getLatestUserID().subscribe(response => {
      console.log(response)
      this.userID = response + 1
    })
  }

  userRegister:FormGroup = this.fb.group({
    userName: ['',Validators.nullValidator],
    email:['', Validators.nullValidator],
    password:['',Validators.nullValidator]
   
  })

  userID!:number
  // userName!:string
  // email!:string
  // password!:string

  doRegister() {
    this.authService.registerUser(this.userID, this.userRegister.value.userName, this.userRegister.value.email, this.userRegister.value.password)
                    .subscribe(response => {
                      console.log(response)
                      this.router.navigateByUrl('/login')
                      // alert('Hello ' + this.userRegister.value.userName + '! You\'ve registered successfully!')
                    })
  }
}
