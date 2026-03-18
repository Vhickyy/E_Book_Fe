import { Component } from '@angular/core';
import { DashboardLayout } from '../../../shared/dashbaord/dashboard-layout/dashboard-layout';
import { Svgs } from '../../../assets/svgs/svgs';
import { CART_SVG } from '../../../../assets/svgs';

@Component({
  selector: 'app-dashboard',
  imports: [Svgs],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  cartSvg = CART_SVG;
}
