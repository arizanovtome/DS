import { Component, OnInit } from '@angular/core';
import { MeshProduct } from '../../_models/meshProduct';
import { MeshProductService } from '../../_services/MeshProduct.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: MeshProduct[];

  constructor(private meshProductService: MeshProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.meshProductService.getProducts().subscribe((products: MeshProduct[]) => {
      this.products = products;
    }, error => {
      console.log('Nastana greshka pri prevzemanjeto');
    });
  }

}
