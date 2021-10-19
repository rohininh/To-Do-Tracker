import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; 
import { AuthenticationService } from '../services/authentication.service';
import { LayoutComponent } from '../layout/layout.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports: [ HttpClientModule, RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers: [AuthenticationService,LayoutComponent,BsModalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Login Component', () => {
    expect(component).toBeTruthy();
  });

//   it('Should set submitted to true', async(() => {
//     component.doLogin();
//     expect(component.doLogin).toBeTruthy();

//  }));

it('Login-Form should be valid', async(()=> {
  component.userLogin.controls['email'].setValue('rohini@gmail.com');
    component.userLogin.controls['password'].setValue('rohini123');
    expect(component.userLogin.valid).toBeTruthy();
}));

it('Login-Form should be invalid', async(()=> {
  component.userLogin.controls['email'].setValue('');
  component.userLogin.controls['password'].setValue('');
  expect(component.userLogin.valid).toBeFalsy();
}));
});
