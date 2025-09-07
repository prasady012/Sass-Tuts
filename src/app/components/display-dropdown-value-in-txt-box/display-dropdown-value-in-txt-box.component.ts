import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-dropdown-value-in-txt-box',
  template: `
    <div class="Container">
      <div class="row">
        <div class="col-md-4">
          <select class="form-control" [(ngModel)]="selectedGender">
            <option value="">Select Gender</option>
            <option *ngFor="let option of gender" [value]="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="col-md-4">
          <input class="form-control" [(ngModel)]="selectedGender" readonly />
          <br />
          <p>
            Selected Gender is: <b>{{ selectedGender }}</b>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class DisplayDropdownValueInTxtBoxComponent implements OnInit {
  gender: string[] = ['Male', 'Female', 'Other'];
  selectedGender: string = 'Male';
  constructor() {}

  ngOnInit(): void {}
}
