import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit {
  items: any = [];
  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.testService.itemsSubject.subscribe((data) => {
      this.items = data;
    });
  }
}
