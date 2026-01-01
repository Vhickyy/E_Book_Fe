import { Component } from '@angular/core';
import { Button } from '../../../UI/button/button';
import { AuthLayout } from '../../../shared/auth-layout/auth-layout';

@Component({
  selector: 'app-verify-email',
  imports: [Button, AuthLayout],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.css',
})
export class VerifyEmail {}
