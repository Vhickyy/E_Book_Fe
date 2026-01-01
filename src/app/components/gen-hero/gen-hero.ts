import { Component, input } from '@angular/core';
import { Button } from '../../UI/button/button';
import { Nav } from '../../shared/nav/nav';

@Component({
  selector: 'app-gen-hero',
  imports: [Button, Nav],
  templateUrl: './gen-hero.html',
  styleUrl: './gen-hero.css',
})
export class GenHero {
  text = input.required<string>();
}
