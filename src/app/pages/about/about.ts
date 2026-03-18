import { Component } from '@angular/core';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-about',
  imports: [Nav, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
