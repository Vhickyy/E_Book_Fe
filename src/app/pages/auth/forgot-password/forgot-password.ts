import { Component } from '@angular/core';
import { AuthLayout } from '../../../shared/auth-layout/auth-layout';
import { Button } from '../../../UI/button/button';

@Component({
  selector: 'app-forgot-password',
  imports: [AuthLayout, Button],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {}
