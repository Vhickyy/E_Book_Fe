import { Component, inject } from '@angular/core';
import { AuthLayout } from '../../../shared/auth-layout/auth-layout';
import { CommonModule } from '@angular/common';
import { Step1 } from './components/step1/step1';
import { Step3 } from './components/step3/step3';
import { Step2 } from './components/step2/step2';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './register-service';

@Component({
  selector: 'app-register',
  imports: [AuthLayout, CommonModule, Step1, Step3, Step2, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  regService = inject(RegisterService);
  steps = ['Personal Information', 'Interest', 'Preview details'];

  registerUser(e: Event) {
    e.preventDefault();
    this.regService.registerUser();
  }
}
