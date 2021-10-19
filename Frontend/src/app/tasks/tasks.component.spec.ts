import { ComponentFixture, TestBed } from '@angular/core/testing';

import{ TasksComponent } from './tasks.component'
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; 
import { AuthenticationService } from '../services/authentication.service';
import { LayoutComponent } from '../layout/layout.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule,ToastrService } from 'ngx-toastr';

describe('CardsComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksComponent ],
      imports: [ HttpClientModule, RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers: [AuthenticationService,LayoutComponent,BsModalService, ToastrModule,ToastrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create card Component', () => {
    expect(component).toBeTruthy();
  });

  it('should display All tasks belongs to logged in user', () => {
    expect(component.getAllTasks).toBeTruthy();
  });
  it('should display Completed Tasks belongs to logged in user', () => {
    expect(component.getCompleted).toBeTruthy();
  });
  it('should display All High Priority Tasks belongs to logged in user', () => {
    expect(component.getHighPriority).toBeTruthy();
  });
  it('should display All Pending Tasks belongs to logged in user', () => {
    expect(component.getPending).toBeTruthy();
  });
  it('should display Archive Tasks belongs to logged in user', () => {
    expect(component.getArchived).toBeTruthy();
  });
});
