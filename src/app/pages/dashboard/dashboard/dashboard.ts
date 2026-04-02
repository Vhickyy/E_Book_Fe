import { Component } from '@angular/core';
import { CART_SVG } from '../../../../assets/svgs';
import { Svgs } from '../../../components/svgs/svgs';

@Component({
  selector: 'app-dashboard',
  imports: [Svgs],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  cartSvg = CART_SVG;
}
