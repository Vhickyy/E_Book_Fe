import { Component, model } from '@angular/core';
import { Button } from '../../UI/button/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  imports: [Button, RouterLink, RouterLinkActive],
  templateUrl: './mobile-nav.html',
  styleUrl: './mobile-nav.css',
})
export class MobileNav {
  mobile = model<boolean>(false);

  closeNav() {
    this.mobile.set(false);
  }

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
