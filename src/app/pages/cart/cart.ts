import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Button } from '../../UI/button/button';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-cart',
  imports: [Nav, Button, Footer],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {}
