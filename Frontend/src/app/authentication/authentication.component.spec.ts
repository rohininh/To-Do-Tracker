import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; 
import { AuthenticationService } from '../services/authentication.service';
import { LayoutComponent } from '../layout/layout.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationComponent ],
      imports: [ HttpClientModule, RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers: [AuthenticationService,LayoutComponent,BsModalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Authentication Component', () => {
    expect(component).toBeTruthy();
  });
});
