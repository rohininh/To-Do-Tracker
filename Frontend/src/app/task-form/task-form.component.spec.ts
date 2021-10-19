import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; 
import { AuthenticationService } from '../services/authentication.service';
import { LayoutComponent } from '../layout/layout.component';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFormComponent ],
      imports: [ HttpClientModule, RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers: [AuthenticationService,LayoutComponent,BsModalService,BsModalRef]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Task Component should create', () => {
    expect(component).toBeTruthy();
  });

//     it('Should set submitted to true', async(() => {
//     component.addTask();
//     expect(component.addTask).toBeTruthy();

//  }));

//   it('Task-Form should be valid', async(()=> {
//       component.taskForm.controls['title'].setValue('task 01')
//       component.taskForm.controls['desciption'].setValue('This is a task 01 desciption')
//       component.taskForm.controls['category'].setValue('cat-01')
//       component.taskForm.controls['dueDate'].setValue('21-10-2021')
//       component.taskForm.controls['priorityLevel'].setValue('LOW')
//       expect(component.taskForm.valid).toBeTruthy();
//   }));

//   it('Task-Form should be In-valid', async(()=> {
//     component.taskForm.controls['title'].setValue('')
//     component.taskForm.controls['desciption'].setValue('')
//     component.taskForm.controls['category'].setValue('')
//     component.taskForm.controls['dueDate'].setValue('')
//     component.taskForm.controls['priorityLevel'].setValue('')
//     expect(component.taskForm.valid).toBeFalsy();
//   }));

it('should Open new task model', () => {
  expect(component.modalRef).toBeTruthy();
});

it('should Close new task model', () => {
  expect(component.closeModel).toBeTruthy();
});

});
