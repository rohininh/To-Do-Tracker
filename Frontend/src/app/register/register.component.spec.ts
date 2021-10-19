import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; 
import { AuthenticationService } from '../services/authentication.service';
import { LayoutComponent } from '../layout/layout.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ HttpClientModule, RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers: [AuthenticationService,LayoutComponent,BsModalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Registration Component', () => {
    expect(component).toBeTruthy();
  });

//     it('Should set submitted to true', async(() => {
//     component.doRegister();
//     expect(component.doRegister).toBeTruthy();

//  }));

// it('Registrtion-Form should be valid', async(()=> {
//     component.userRegister.controls['userName'].setValue('rohini');
//     component.userRegister.controls['email'].setValue('rohini@gmail.com');
//       component.userRegister.controls['password'].setValue('rohini123');
//       expect(component.userRegister.valid).toBeTruthy();
//   }));

//   it('Registrtion-Form should be invalid', async(()=> {
//     component.userRegister.controls['userName'].setValue('');
//     component.userRegister.controls['email'].setValue('');
//       component.userRegister.controls['password'].setValue('');
//     expect(component.userRegister.valid).toBeFalsy();
//   }));

});
