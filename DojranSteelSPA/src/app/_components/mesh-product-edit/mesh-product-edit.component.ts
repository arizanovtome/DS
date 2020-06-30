import { Component, OnInit, ViewChild } from '@angular/core';
import { MeshProduct } from 'src/app/_models/meshProduct';
import { ActivatedRoute } from '@angular/router';
import { MeshProductService } from 'src/app/_services/MeshProduct.service';
import { NgForm } from '@angular/forms';
import { MeshProductivity } from 'src/app/_models/meshProductivity';

@Component({
  selector: 'app-mesh-product-edit',
  templateUrl: './mesh-product-edit.component.html',
  styleUrls: ['./mesh-product-edit.component.css']
})
export class MeshProductEditComponent implements OnInit {
  product: MeshProduct;
  productivity: MeshProductivity [];
  @ViewChild('editForm') editForm: NgForm;
  constructor(private route: ActivatedRoute, private meshProductService: MeshProductService) { }

  ngOnInit() {
    console.log(this.route);
    this.route.data.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.product = data['meshproduct'];
    });
    console.log(this.meshProductService.getEfectivities());
    this.meshProductService.getEfectivities().subscribe(data => {
      this.productivity = data;
      console.log(data);
      console.log(this.productivity);
    });
  }
  updateProduct() {

    this.meshProductService.updateProduct(this.product.id, this.product).subscribe(next => {
      console.log(this.product.id);
      console.log('Profile updated successfully');
      this.editForm.reset(this.product);
    }, error => {
      console.log('greshka pri editieanjeto');
    });
   }

   calcDerivedData() {
     if ((this.product.width * 100 ) === 215) {
     this.product.numberOfLineWires = Math.ceil(this.product.width * 100 / this.product.lineWireDistance);
     } else if (this.product.width === 2) {
      this.product.numberOfLineWires = Math.floor(this.product.width * 100 / this.product.lineWireDistance);
     } else {
      this.product.numberOfLineWires = Math.round(this.product.width * 100 / this.product.lineWireDistance);
     }

     this.product.numberOfCrossWires = Math.floor(this.product.lenght * 100 / this.product.crossWireDistance);

     const gramsPerMeterLine = Math.pow((this.product.lineWireSize / 2), 2) * Math.PI * 7.85;
     const gramsPerMeterCross = Math.pow((this.product.crossWireSize / 2), 2) * Math.PI * 7.85;
     this.product.weightOfLineWires = Math.round(this.product.lenght * this.product.numberOfLineWires * gramsPerMeterLine) / 1000;
     this.product.weightOfCrossWires = Math.round(this.product.width * this.product.numberOfCrossWires * gramsPerMeterCross) / 1000;
     this.product.theoreticalWeight = (this.product.weightOfLineWires + this.product.weightOfCrossWires);
     this.product.bundleWeight = Math.round(this.product.theoreticalWeight * this.product.piecesInBundle);

     const efectivity = this.productivity.find(i => i.crossWireSize === this.product.crossWireSize
       && i.productionLine === this.product.productionLine);

     console.log(efectivity);
     if (efectivity) {
      this.product.maxWeldsPerMinute = efectivity.averageWeldsMinute;
      this.product.budgetedEficiency = efectivity.wireEfectivity;
      this.product.budgetedWeldsPerMinute = (this.product.maxWeldsPerMinute * this.product.budgetedEficiency);
     } else {
      alert('No predifined budgeted numbers');
      this.product.maxWeldsPerMinute = 0;
      this.product.budgetedEficiency = 0;
      this.product.budgetedWeldsPerMinute = 0;
     }

   }

   lineWireEdit() {
    const numberOfLineWires = Number(prompt('Please enter number of wires:'));
    if (numberOfLineWires != null &&  numberOfLineWires > 0) {
      this.product.numberOfLineWires = numberOfLineWires;
    }
   }

}
