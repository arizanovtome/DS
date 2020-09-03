import { Component, OnInit } from '@angular/core';
import { MorningProduct } from 'src/app/_models/morningProduct';
import { MorningProductService } from 'src/app/_services/MorningProduct.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import * as moment from 'moment';
import { MeshProductService } from 'src/app/_services/MeshProduct.service';
import { MorningEntryProduct } from 'src/app/_models/morningEntryProduct';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-schl-entry',
  templateUrl: './schl-entry.component.html',
  styleUrls: ['./schl-entry.component.css']
})
export class SchlEntryComponent implements OnInit {

  product: any = {};
  schlatterProducts: MorningProduct[];
  selectedProduct: MorningProduct;
  budgetedQuantity: number;
  availableTime: number;
  entryForm: FormGroup;
  selected: string;
  // noResult = false;
  schlatterProductsDescription: string[];

  constructor(private morningProductService: MorningProductService, private fb: FormBuilder,
              private meshProductService: MeshProductService, public datepipe: DatePipe) { }

  ngOnInit() {

    this.entryForm = this.fb.group({
      rows: this.fb.array([
        this.fb.group({
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
      // tslint:disable-next-line:no-string-literal
      qunatityBd: parseFloat(selectedProduct.productionPerHour.toString().replace(',', '.')) * this.no_rows.controls[i].value['availableTime'] / 60
    });

  }
  calculateBD(avTime: any, i: number){
    const selectedProduct = this.schlatterProducts.find
    // tslint:disable-next-line:no-string-literal
    (x => x.description === this.no_rows.controls[i].value['description']);
    // tslint:disable-next-line:no-string-literal
    this.no_rows.controls[i].patchValue({
      qunatityBd: parseFloat(selectedProduct.productionPerHour.toString().replace(',', '.')) * avTime / 60
    });
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
      date: [moment().subtract(1, 'days').startOf('day').toDate(), Validators.required],
      startTimeHour: ['08', [Validators.min(0), Validators.max(24)]],
      startTimeMinutes: ['00', [Validators.min(0), Validators.max(59)]],
      sapCode: ['', Validators.required],
      description: ['', Validators.required],
      noResult: [false],
      qunatityPc: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      qunatityTn: ['', [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,3})?$')]],
      availableTime: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      qunatityBd: ['', Validators.required],
    }));
  }

  deleteRowClick() {
    this.no_rows.removeAt(this.no_rows.length - 1);
  }

  saveClick() {

    this.no_rows.markAllAsTouched();
    if (!this.no_rows.invalid){
      this.product.productionLine = 'Schlatter';
      const fullDate = new Date(this.no_rows.controls[0].value.date);
      fullDate.setHours(this.no_rows.controls[0].value.startTimeHour, this.no_rows.controls[0].value.startTimeMinutes);
      this.product.date = this.datepipe.transform(fullDate, 'yyyy-MM-dd hh:mm:ss');
      this.product.startTime = this.no_rows.controls[0].value.startTime;
      this.product.sapCode = this.no_rows.controls[0].value.sapCode;
      this.product.description = this.no_rows.controls[0].value.description;
      this.product.quantityPieces = this.no_rows.controls[0].value.qunatityPc;
      this.product.quantityTons = this.no_rows.controls[0].value.qunatityTn;
      this.product.availableTime = this.no_rows.controls[0].value.availableTime;
      console.log(this.product.date);
      this.product.budgetedQunatity = this.no_rows.controls[0].value.qunatityBd;

      this.meshProductService.schlatterEntry(this.product as MorningEntryProduct).subscribe(next => {
        console.log('Profile updated successfully');
        // this.addProductForm.reset(this.product);
      }, error => {
        console.log(this.product.sapCode);
        console.log('greshka pri editieanjeto');
      });
    }
  }

  typeaheadNoResults(event: boolean, i: number): void {
    console.log(this.no_rows.controls[i]);
    console.log(event);
    this.no_rows.controls[i].patchValue({
      noResult: event
    });
  }

}
