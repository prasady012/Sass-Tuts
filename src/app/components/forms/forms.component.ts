import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  formName: string = 'Template Driven';
  constructor() {}

  ngOnInit(): void {}

  captureText(formType) {
    this.formName = formType;
  }

  onSave(loginForm) {
    console.log(loginForm);
  }
}
