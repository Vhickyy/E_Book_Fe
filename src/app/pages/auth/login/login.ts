import { Component } from '@angular/core';
import { AuthLayout } from '../../../shared/auth-layout/auth-layout';
import { Button } from '../../../UI/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [AuthLayout, Button, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
