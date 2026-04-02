import {
  afterNextRender,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  AnnotationEditorEvent,
  NgxExtendedPdfViewerModule,
  NgxExtendedPdfViewerService,
} from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-reading',
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './reading.html',
  styleUrl: './reading.css',
})
export class Reading {
  private storageKey = 'pdf-annotations';

  annotationMode = 0; // 0 = none, 9 = highlight, 15 = freetext
  currentPage = 1;

  constructor(private pdfService: NgxExtendedPdfViewerService) {}

  ngOnInit() {
    // annotations are loaded via the serialized PDF blob approach below
  }

  setMode(mode: number) {
    this.annotationMode = mode;
  }

  onAnnotationEvent(event: AnnotationEditorEvent) {
    // fires every time user adds/edits/removes an annotation
    // auto-save on every change
    this.saveAnnotations();
  }

  async saveAnnotations() {
    try {
      // getSerializedAnnotations() returns the annotation data as JSON
      const annotations = await this.pdfService.getSerializedAnnotations();
      if (annotations) {
        localStorage.setItem(this.storageKey, JSON.stringify(annotations));
        console.log('Annotations saved');
      }
    } catch (err) {
      console.error('Failed to save annotations', err);
    }
  }

  async loadAnnotations() {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return;

    try {
      const annotations = JSON.parse(raw);
      // await this.pdfService.addSerializedAnnotations(annotations);
    } catch (err) {
      console.error('Failed to load annotations', err);
    }
  }

  // call this after PDF finishes loading
  onPdfLoaded() {
    this.loadAnnotations();
  }
}
