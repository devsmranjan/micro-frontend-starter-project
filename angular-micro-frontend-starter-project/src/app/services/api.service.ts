import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../pages/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _serverUrl: string = "http://localhost:3000";

  constructor(private _httpClient: HttpClient) { }

  getProducts = (): Observable<ProductDTO[]> => {
    return this._httpClient.get<ProductDTO[]>(this._serverUrl + "/products");
  };

  getProductById = (id: string | null): Observable<ProductDTO> => {
    return this._httpClient.get<ProductDTO>(this._serverUrl + `/products/${id}`);
  };
}
