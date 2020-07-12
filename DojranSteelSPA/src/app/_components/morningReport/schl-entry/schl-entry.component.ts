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
  selected: string;
  //noResult = false;
  schlatterProductsDescription: string[];

  constructor(private morningProductService: MorningProductService, private fb: FormBuilder) { }

  ngOnInit() {

    this.entryForm = this.fb.group({
      rows: this.fb.array([
        this.fb.group({
          date: [moment().subtract(1, 'days').format('DD/MM/YYYY'), Validators.required],
          sapCode: ['', Validators.required],
          description: ['', Validators.required],
          noResult: [false],
          qunatityPc: ['', Validators.required],
          qunatityTn: ['', Validators.required, Validators.pattern(/^[0-9]*$/)],
          availableTime: ['', Validators.required],
          qunatityBd: ['', Validators.required],
        })
      ])
  });

    this.loadProducts();
    this.createEntryForm();
    this.addRow();
    // this.addRow();
    // this.addRow();
  }
  addRowClick(){
    this.addRow();
  }

  loadProducts() {
    this.morningProductService.getProducts().subscribe((schlatterProducts: MorningProduct[]) => {
      // tslint:disable-next-line:no-string-literal
      this.schlatterProducts = schlatterProducts.filter(x => x.productionLine === 'Schl');
      this.schlatterProductsDescription = this.schlatterProducts.map(d => d.description);
    }, error => {
      console.log('Nastana greshka pri prevzemanjeto');
    });
    
  }

  selectProduct(i: number) {
    const selectedProduct = this.schlatterProducts.find
    // tslint:disable-next-line:no-string-literal
    (x => x.description === this.no_rows.controls[i].value['description']);
    // tslint:disable-next-line:no-string-literal
    this.no_rows.controls[i].patchValue({
      sapCode: selectedProduct.sapCode,
      qunatityBd: parseFloat(selectedProduct.productionPerHour.toString().replace(',', '.')) * this.no_rows.controls[i].value['availableTime'] / 60
    })

  }
  calculateBD(avTime: any, i: number){

    console.log("calc BD");
    const selectedProduct = this.schlatterProducts.find
    // tslint:disable-next-line:no-string-literal
    (x => x.description === this.no_rows.controls[i].value['description']);
    // tslint:disable-next-line:no-string-literal
    this.no_rows.controls[i].patchValue({
      qunatityBd: parseFloat(selectedProduct.productionPerHour.toString().replace(',', '.')) * avTime / 60
    })
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
      noResult: [false],
      qunatityPc: ['', Validators.required],
      qunatityTn: ['', Validators.required],
      availableTime: ['', Validators.required],
      qunatityBd: ['', Validators.required],
    }));
  }

  typeaheadNoResults(event: boolean, i: number): void {
    console.log(this.no_rows.controls[i]);
    console.log(event);
    this.no_rows.controls[i].patchValue({
      noResult: event
    })
  }

}
