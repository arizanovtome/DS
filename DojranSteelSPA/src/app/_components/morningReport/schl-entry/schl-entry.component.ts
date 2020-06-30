import { Component, OnInit } from '@angular/core';
import { MorningProduct } from 'src/app/_models/morningProduct';
import { MorningProductService } from 'src/app/_services/MorningProduct.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import * as moment from 'moment';


@Component({
  selector: 'app-schl-entry',
  templateUrl: './schl-entry.component.html',
  styleUrls: ['./schl-entry.component.css']
})
export class SchlEntryComponent implements OnInit {

  schlatterProducts: MorningProduct[];
  selectedProduct: MorningProduct;
  budgetedQuantity: number;
  availableTime: number;
  entryForm: FormGroup;



  constructor(private morningProductService: MorningProductService, private fb: FormBuilder) { }

  ngOnInit() {

    this.entryForm = this.fb.group({
      rows: this.fb.array([
        this.fb.group({
          date: [moment().subtract(1, 'days').format('DD/MM/YYYY'), Validators.required],
          sapCode: ['', Validators.required],
          description: ['', Validators.required],
          qunatityPc: ['', Validators.required],
          qunatityTn: ['', Validators.required],
          availableTime: ['', Validators.required],
          qunatityBd: ['', Validators.required],
        })
      ])
  });

    this.loadProducts();
    this.createEntryForm();
    this.addRow();
    this.addRow();
    this.addRow();
  }

  loadProducts() {
    this.morningProductService.getProducts().subscribe((schlatterProducts: MorningProduct[]) => {
      // tslint:disable-next-line:no-string-literal
      this.schlatterProducts = schlatterProducts.filter(x => x.productionLine === 'Schl');
    }, error => {
      console.log('Nastana greshka pri prevzemanjeto');
    });
  }

  selectProduct(i: number) {
    const sapCode = this.schlatterProducts.find
    // tslint:disable-next-line:no-string-literal
    (x => x.description === this.no_rows.controls[i].value['description']).sapCode;
    // tslint:disable-next-line:no-string-literal
    this.no_rows.controls[i].value['sapCode'] = sapCode;

  }
  calculateBD(avTime: any, i: number){
    const budgetedQuantity = this.schlatterProducts.find
    // tslint:disable-next-line:no-string-literal
    (x => x.description === this.no_rows.controls[i].value['description']).productionPerHour;
    // tslint:disable-next-line:no-string-literal
    this.no_rows.controls[i].value['qunatityBd'] = parseFloat(budgetedQuantity.toString().replace(',', '.')) * avTime / 60;
  }

  createEntryForm() {
    this.entryForm = this.fb.group({
        rows: this.fb.array([])
    });
  }

  get no_rows(){
    return this.entryForm.get('rows') as FormArray;
  }

  addRow() {
    this.no_rows.push(this.fb.group({
      date: [moment().subtract(1, 'days').format('DD/MM/YYYY'), Validators.required],
      sapCode: ['', Validators.required],
      description: ['', Validators.required],
      qunatityPc: ['', Validators.required],
      qunatityTn: ['', Validators.required],
      availableTime: ['', Validators.required],
      qunatityBd: ['', Validators.required],
    }));
  }

}
