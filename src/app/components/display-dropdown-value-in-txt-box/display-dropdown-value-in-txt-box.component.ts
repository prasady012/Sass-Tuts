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

      <br /><br />

      <div class="row">
        <div class="col-md-3">
          <label>
            <input
              type="radio"
              name="options"
              value="Option 1"
              (change)="onSelectionChange('Option 1')"
              [checked]="selectedOption === 'Option 2'"
            />
            Option 1
          </label>
        </div>
        <div class="col-md-3">
          <label>
            <input
              type="radio"
              name="options"
              value="Option 2"
              (change)="onSelectionChange('Option 2')"
              [checked]="selectedOption === 'Option 2'"
            />
            Option 2
          </label>
        </div>
        <div class="col-md-3">
          <label>
            <input
              type="radio"
              name="options"
              value="Option 3"
              (change)="onSelectionChange('Option 3')"
              [checked]="selectedOption === 'Option 3'"
            />
            Option 3
          </label>
        </div>
        <div class="col-md-3">
          <input type="text" [value]="selectedOption" readonly />
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

  selectedOption: string = '';
  onSelectionChange(value: string) {
    this.selectedOption = value;
  }
}
