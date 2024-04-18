import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.css']
})
export class PdfPreviewComponent {
  pdfSrc: any = null;

  constructor() { }

  handleFileInput(event: any) {
    console.log('File input triggered');
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      console.log('File loaded successfully');
      this.pdfSrc = reader.result;
    };
    reader.readAsArrayBuffer(file);
  }
}
