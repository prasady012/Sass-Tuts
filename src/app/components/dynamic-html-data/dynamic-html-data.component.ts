import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-html-data',
  template: ` <div [innerHTML]="htmlContent"></div> `,
  styles: [],
})
export class DynamicHtmlDataComponent implements OnInit {
  dirtyContent: string = "<p style='color:red;'>This is dynamic paragraph.</p>";
  htmlContent: SafeHtml;

  constructor(private _sanitizer: DomSanitizer) {
    this.htmlContent = this._sanitizer.bypassSecurityTrustHtml(
      this.dirtyContent
    );
  }

  ngOnInit(): void {}
}
