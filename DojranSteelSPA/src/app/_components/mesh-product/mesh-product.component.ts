import { Component, OnInit } from '@angular/core';
import { MeshProduct } from '../../_models/meshProduct';
import { MeshProductService } from '../../_services/MeshProduct.service';

@Component({
  selector: 'app-mesh-product',
  templateUrl: './mesh-product.component.html',
  styleUrls: ['./mesh-product.component.css']
})
export class MeshProductComponent implements OnInit {

  meshProducts: MeshProduct[];

  constructor(private meshProductService: MeshProductService) { }

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.meshProductService.getProducts().subscribe((meshProducts: MeshProduct[]) => {
      this.meshProducts = meshProducts;
      console.log(meshProducts);
    }, error => {
      console.log('Nastana greshka pri prevzemanjeto');
    });
  }
}
