import { Component } from '@angular/core';
import { Button } from '../../UI/button/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [Button, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Books',
      path: '/books',
    },
    {
      name: 'Journals',
      path: '/journal',
    },
  ];
}
