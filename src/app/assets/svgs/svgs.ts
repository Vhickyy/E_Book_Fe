import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svgs',
  imports: [CommonModule],
  templateUrl: './svgs.html',
  styleUrl: './svgs.css',
})
export class Svgs {
  svg = input.required<string>();
  svgclass = input('w-10 h-10');

  safeSvg!: SafeHtml;

  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(this.svg());
  }
}
