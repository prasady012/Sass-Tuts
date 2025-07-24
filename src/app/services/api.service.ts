import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  createProduct(body) {
    return this.http.post(`${this.url}`, body).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getProducts() {
    return this.http.get(`${this.url}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  updateProduct(body, id) {
    return this.http.put(`${this.url}/${id}`, body).pipe(
      map((res) => {
        return res;
      })
    );
  }

  deleteProduct(id) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
