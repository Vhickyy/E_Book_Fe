import { Component } from '@angular/core';
import { Button } from '../../../UI/button/button';
import { AuthLayout } from '../../../shared/auth-layout/auth-layout';

@Component({
  selector: 'app-reset-password',
  imports: [Button, AuthLayout],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {}
