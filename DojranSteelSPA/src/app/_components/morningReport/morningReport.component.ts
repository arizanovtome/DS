import { Component, OnInit } from '@angular/core';
import { MorningProduct } from '../../_models/morningProduct';
import { MorningProductService } from '../../_services/MorningProduct.service';

@Component({
  selector: 'app-morning-report',
  templateUrl: './morningReport.component.html',
  styleUrls: ['./morningReport.component.css']
})
export class MorningReportComponent implements OnInit {

  morningProducts: MorningProduct[];
  productionLine = 'Rolling Mill';

  constructor(private morningProductService: MorningProductService) { }

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.morningProductService.getProducts().subscribe((morningProducts: MorningProduct[]) => {
      this.morningProducts = morningProducts;
      console.log(morningProducts);
    }, error => {
      console.log('Nastana greshka pri prevzemanjeto');
    });
  }

  loadEntryForm() {

  }
}
