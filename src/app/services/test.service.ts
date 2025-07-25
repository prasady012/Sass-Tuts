import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mockData } from '../Interfaces/data';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private url = 'assets/MOCK_DATA.json';
  public items: any = [];
  public itemsSubject = new Subject();
  constructor(private _http: HttpClient) {
    this.sendItems();
  }

  getMockData(): Observable<mockData[]> {
    return this._http.get<mockData[]>(this.url).pipe(catchError(this.showErr));
  }

  showErr(error: HttpErrorResponse) {
    return throwError(error.message || 'Invalid Response');
  }

  sendItems() {
    this.itemsSubject.next(this.items);
  }

  addItem(item: any) {
    this.items.push(item);
    this.sendItems();
  }
}
