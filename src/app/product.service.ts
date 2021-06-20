import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

const header = {
  headers: new HttpHeaders(
    {"Content-Type": "application/json"}
  ) 
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseURL = "http://localhost:9000/products"

  constructor(private httpClient: HttpClient) { }

  //consuming the Product list from the backend
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  //POST method
  createProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  getProductById(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  updateProduct(product: Product): Observable<Object>{
    return this.httpClient.put<Product>(`${this.baseURL}`, product);
  }

  deleteProduct(product: Product): Observable<Object>{
    return this.httpClient.delete<Product>(`${this.baseURL}/${product.id}`);
  }
  
}
