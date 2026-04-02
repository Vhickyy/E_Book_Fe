import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-container',
  imports: [PdfViewerModule],
  templateUrl: './pdf-container.html',
  styleUrl: './pdf-container.css',
})
export class PdfContainer {}
