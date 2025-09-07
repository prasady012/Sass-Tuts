import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  searchText = '';
  employees: any[] = [
    { id: 1, name: 'Virat', role: 'Manager' },
    { id: 2, name: 'Rohit', role: 'CEO' },
    { id: 3, name: 'Gill', role: 'Developer' },
    { id: 4, name: 'Rishabh', role: 'Tester' },
    { id: 5, name: 'Rahul', role: 'Designer' },
  ];
  isLoggedIn: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
