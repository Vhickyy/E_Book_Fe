import { Component, inject, signal } from '@angular/core';
import { LOGO_SVG, MENU_SVGS } from '../../../../assets/svgs';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Svgs } from '../../../components/svgs/svgs';

@Component({
  selector: 'app-sidebar',
  imports: [Svgs, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  router = inject(Router);
  logosvg = LOGO_SVG;
  menusvg = MENU_SVGS;
  activeDropDown = signal('');
  sidebarData = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Library',
      subLinks: [
        {
          name: 'Books',
          link: '/dashboard/library',
        },
        {
          name: 'Currently Reading',
          link: '/dashboard/library/reading',
        },
        {
          name: 'Completed',
          link: '/dashboard/completed',
        },
      ],
    },
    {
      name: 'Settings',
      path: '/settings',
    },
    {
      name: 'Profile',
      path: '/profile',
    },
    {
      name: 'Wishlist',
      path: '/dashboard/wishlist',
    },
    // {
    //   name: 'Explore',
    //   subLinks: [
    //     {
    //       name: 'Books',
    //       link: '/dashboard/library',
    //     },
    //     {
    //       name: 'Books',
    //       link: '/dashboard/wishlist',
    //     },
    //   ],
    // },
  ];

  isParentActive(item: any) {
    return item.subLinks.some((sub: any) =>
      this.router.url.startsWith(sub.link),
    );
  }
  updateActiveDropDown(name: string) {
    if (name && this.activeDropDown() == name) {
      this.activeDropDown.set('');
    } else {
      this.activeDropDown.set(name);
    }
  }
}
