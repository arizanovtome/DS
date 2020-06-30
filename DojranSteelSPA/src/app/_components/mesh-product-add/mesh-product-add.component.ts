import { Component, OnInit, ViewChild } from '@angular/core';
import { MeshProduct } from 'src/app/_models/meshProduct';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MeshProductService } from 'src/app/_services/MeshProduct.service';

@Component({
  selector: 'app-mesh-product-add',
  templateUrl: './mesh-product-add.component.html',
  styleUrls: ['./mesh-product-add.component.css']
})
export class MeshProductAddComponent implements OnInit {
  product: any = {};
  @ViewChild('addProductForm') addProductForm: NgForm;
  constructor(private route: ActivatedRoute, private meshProductService: MeshProductService) { }

  ngOnInit() {

  }

  addProduct() {
    this.meshProductService.addProduct(this.product as MeshProduct).subscribe(next => {
      console.log('Profile updated successfully');
      this.addProductForm.reset(this.product);
    }, error => {
      console.log(this.product.sapCode);
      console.log('greshka pri editieanjeto');
    });
   }

}
