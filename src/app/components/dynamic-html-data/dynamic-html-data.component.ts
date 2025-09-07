import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-html-data',
  template: `
    <div [innerHTML]="htmlContent"></div>
    <button (click)="toggleTextBox()">Enable/Disable TextBox</button>
    <button (click)="focusOnTextBox()">Focus on TextBox</button>
    <app-child-one
      [isDisabled]="isTextBoxDisabled"
      [focusTextBox]="shouldFocusTextBox"
    ></app-child-one>
  `,
  styles: [],
})
export class DynamicHtmlDataComponent implements OnInit {
  dirtyContent: string = "<p style='color:red;'>This is dynamic paragraph.</p>";
  htmlContent: SafeHtml;
  isTextBoxDisabled: boolean = false;
  shouldFocusTextBox: boolean = false;
  constructor(private _sanitizer: DomSanitizer) {
    this.htmlContent = this._sanitizer.bypassSecurityTrustHtml(
      this.dirtyContent
    );
  }

  ngOnInit(): void {}

  toggleTextBox() {
    this.isTextBoxDisabled = !this.isTextBoxDisabled;
  }

  focusOnTextBox() {
    this.shouldFocusTextBox = true;
    setTimeout(() => {
      // Reset after focus to allow future focus toggles
      this.shouldFocusTextBox = false;
    }, 100);
  }
}
