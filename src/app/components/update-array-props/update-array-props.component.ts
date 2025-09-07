import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-array-props',
  template: `<ul>
      <li *ngFor="let item of fruitsArr; let i = index">
        {{ item }}
        <button class="me-2" (click)="updateItem(i)">Update</button>
        <button (click)="removeItem(i)">Remove</button>
      </li>
    </ul>
    <button (click)="addItem()">Add Fruit</button> `,
  styles: [
    `
      li {
        margin: 10px 0;
      }
    `,
  ],
})
export class UpdateArrayPropsComponent implements OnInit {
  fruitsArr: string[] = ['Apple', 'Mango', 'Banana'];
  constructor() {}

  ngOnInit(): void {}
  removeItem(index) {
    this.fruitsArr.splice(index, 1);
  }
  addItem() {
    this.fruitsArr.push('Papaya');
    // Alternatively, to trigger change detection safely:
    // this.fruitsArr = [...this.fruitsArr, 'Oranges'];
  }

  updateItem(i) {
    this.fruitsArr[i] = 'Kiwi';
    // If needed, reassign to new array reference for change detection:
    // this.fruitsArr = [...this.fruitsArr];
  }
}
