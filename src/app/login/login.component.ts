import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: CommonServiceService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    this.errorMessage = '';
    if (this.loginForm.valid) {
      // Perform login action here
      if(this.getBooleanValue(this.loginForm.get('email')?.value)){
        console.log('Login Successful');
        this.service.setUserName('Harshita ❤️');
        this.router.navigate(['/book']);
      } else {
        // Set error message for invalid credentials
        this.errorMessage = 'Only our chotu is allowed to login, you are not our chotu 😜.. please go away';
      }
      
    }else {
      // Set error message for invalid form
      this.errorMessage = 'Please fill in the form correctly.';
    }
  }

  getBooleanValue(value: string): boolean {
    value = value.toLowerCase();
    if(value.includes('harshita') || value.includes('prudhvi')){
      return true;
    }
    return false;
  }
}