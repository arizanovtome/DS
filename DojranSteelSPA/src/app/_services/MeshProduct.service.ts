import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeshProduct } from '../_models/meshProduct';
import { MeshProductivity } from '../_models/meshProductivity';


@Injectable({
  providedIn: 'root'
})
export class MeshProductService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<MeshProduct[]> {
    return this.http.get<MeshProduct[]>(this.baseUrl + 'meshproduct');
  }

  getProduct(id: number): Observable<MeshProduct> {
    return this.http.get<MeshProduct>(this.baseUrl + 'meshproduct/' + id);
  }

  updateProduct(id: number, product: MeshProduct) {
    return this.http.put(this.baseUrl + 'meshproductedit/' + id, product);
  }

  addProduct(product: MeshProduct) {
    return this.http.put(this.baseUrl + 'meshproductadd', product);
  }

  getEfectivities(): Observable<MeshProductivity[]> {
    return this.http.get<MeshProductivity[]>(this.baseUrl + 'meshEfectivity');
  }
}
