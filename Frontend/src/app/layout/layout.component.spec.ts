import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; 



describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      imports: [ RouterTestingModule],
      providers: [BsModalService,BsModalRef]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Layout Component', () => {
    expect(component).toBeTruthy();
  });

  it('should Open new task model', () => {
    expect(component.openModal).toBeTruthy();
  });

  it('should Logout User when click on Logout button', () => {
    expect(component.logout).toBeTruthy();
  });

  it('should Open new task model when floatting button clicks', () => {
    expect(component.openModal).toBeTruthy();
  });

});
