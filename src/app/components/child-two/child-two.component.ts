import { Component, OnInit } from '@angular/core';
import { countries, states } from '../../Interfaces/country-state-data';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent implements OnInit {
  fruits = ['Apple', 'Banana', 'Orange'];
  selectedFruit: string = 'Apple';

  // Array of objects
  countries = countries;
  selectedCountryId: number | null = 1;
  filteredStates = [];
  constructor() {}
  ngOnInit(): void {}

  onCountryChange(countryId) {
    let cId = +countryId;
    this.filteredStates = states.filter((country) => {
      return country.countryId === cId;
    });
  }
}
