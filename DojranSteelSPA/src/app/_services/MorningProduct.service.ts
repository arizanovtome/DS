import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MorningProduct } from '../_models/morningProduct';


@Injectable({
  providedIn: 'root'
})
export class MorningProductService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<MorningProduct[]> {
    return this.http.get<MorningProduct[]>(this.baseUrl + 'morningproduct');
  }

  // getProduct(id: number): Observable<MeshProduct> {
  //   return this.http.get<MeshProduct>(this.baseUrl + 'meshproduct/' + id);
  // }

  // updateProduct(id: number, product: MeshProduct) {
  //   return this.http.put(this.baseUrl + 'meshproductedit/' + id, product);
  // }

  // addProduct(product: MeshProduct) {
  //   return this.http.put(this.baseUrl + 'meshproductadd', product);
  // }

  // getEfectivities(): Observable<MeshProductivity[]> {
  //   return this.http.get<MeshProductivity[]>(this.baseUrl + 'meshEfectivity');
  // }
}
