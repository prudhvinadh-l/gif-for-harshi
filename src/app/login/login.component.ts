import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { get } from 'http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login action here
      if(this.loginForm.get('email')?.value === 'prudhvi4102@gmail.com' || this.getBooleanValue(this.loginForm.get('email')?.value)){
        console.log('Login Successful');
      }
      console.log(this.loginForm.value);

      // Navigate to another route on successful login
      this.router.navigate(['/book']);
    }
  }

  getBooleanValue(value: string): boolean {
    if(value.includes('harshita')){
      return true;
    }
    return value === 'true';
  }
}