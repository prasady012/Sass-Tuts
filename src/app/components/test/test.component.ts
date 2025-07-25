import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @Input() public receiveParentData: any;
  @Output() public childInfo = new EventEmitter();

  public status: boolean = true;
  items: any = [];

  constructor(
    private testService: TestService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  msg: string;
  public switchVal = 'two';
  fetchedData: any = [];
  errorMsg: any;

  ngOnInit(): void {
    this.statusMsg();
    this.fetchMockData();
    this.fetchItems();
  }

  fetchItems() {
    this.testService.itemsSubject.subscribe((data) => {
      this.items = data;
    });
  }

  statusMsg() {
    return this.status ? (this.msg = 'True') : (this.msg = 'False');
  }

  getChildInfo() {
    this.childInfo.emit('Child Data');
  }

  fetchMockData() {
    this.testService.getMockData().subscribe(
      (res) => {
        this.fetchedData = res;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }

  toChildOne() {
    this.router.navigate(['child-one'], { relativeTo: this.activatedRoute });
  }

  toChildTwo() {
    this.router.navigate(['child-two'], { relativeTo: this.activatedRoute });
  }
}
