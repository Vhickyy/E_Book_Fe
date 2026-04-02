import { Component, HostListener, signal } from '@angular/core';
import { Button } from '../../UI/button/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MobileNav } from '../../components/mobile-nav/mobile-nav';
import { CommonModule } from '@angular/common';
import { CART_SVG, LOGO_SVG, MENU_SVGS } from '../../../assets/svgs';
import { Svgs } from '../../components/svgs/svgs';

@Component({
  selector: 'app-nav',
  imports: [
    Button,
    RouterLink,
    RouterLinkActive,
    MobileNav,
    CommonModule,
    Svgs,
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  mobile = signal(false);

  scrolled = false;
  menusvg = MENU_SVGS;
  cartsvg = CART_SVG;
  logosvg = LOGO_SVG;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 100;
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
