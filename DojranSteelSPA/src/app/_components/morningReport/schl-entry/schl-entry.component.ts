import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MorningProduct } from 'src/app/_models/morningProduct';
import { MorningProductService } from 'src/app/_services/MorningProduct.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';
import * as moment from 'moment';
import { MeshProductService } from 'src/app/_services/MeshProduct.service';
import { MorningEntryProduct } from 'src/app/_models/morningEntryProduct';
import { DatePipe } from '@angular/common';

import * as xlsx from 'xlsx';

@Component({
  selector: 'app-schl-entry',
  templateUrl: './schl-entry.component.html',
  styleUrls: ['./schl-entry.component.css'],
})
export class SchlEntryComponent implements OnInit {
  @ViewChild('table', { static: false }) table: ElementRef;

  morningEntryProducts: MorningEntryProduct[];
  product: any = {};
  schlatterProducts: MorningProduct[];
  selectedProduct: MorningProduct;
  budgetedQuantity: number;
  availableTime: number;
  entryForm: FormGroup;
  selected: string;
  // noResult: boolean[];
  noResult: any = {};
  schlatterProductsDescription: string[];

  constructor(
    private morningProductService: MorningProductService,
    private fb: FormBuilder,
    private meshProductService: MeshProductService,
    public datepipe: DatePipe
  ) {}

  ngOnInit() {
    this.noResult[0] = false;
    this.entryForm = this.fb.group({
      rows: this.fb.array([this.fb.group({})]),
    });

    this.loadProducts();
    this.createEntryForm();
    this.addRow();
    this.loadEntries();
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(
      this.table.nativeElement
    );
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    console.log(moment().format('DD-MMM-YYYY HH:mm:ss'));
    xlsx.writeFile(wb, moment().format('DD-MMM-YYYY HH_mm') + ' SchlatterEntry.xlsx');
  }

  addRowClick() {
    this.addRow();
  }

  loadProducts() {
    this.morningProductService.getProducts().subscribe(
      (schlatterProducts: MorningProduct[]) => {
        this.schlatterProducts = schlatterProducts.filter(
          (x) => x.productionLine === 'Schl'
        );
        this.schlatterProductsDescription = this.schlatterProducts.map(
          (d) => d.description
        );
      },
      (error) => {
        console.log('Nastana greshka pri prevzemanjeto');
      }
    );
  }

  selectProduct(i: number) {
    const selectedProduct = this.schlatterProducts.find(
      (x) => x.description === this.no_rows.controls[i].value['description']
    );
    this.no_rows.controls[i].patchValue({
      sapCode: selectedProduct.sapCode,
      qunatityBd:
        (parseFloat(
          selectedProduct.productionPerHour.toString().replace(',', '.')
        ) *
          this.no_rows.controls[i].value['availableTime']) /
        60,
    });
  }
  calculateBD(avTime: any, i: number) {
    const selectedProduct = this.schlatterProducts.find(
      (x) => x.description === this.no_rows.controls[i].value['description']
    );
    this.no_rows.controls[i].patchValue({
      qunatityBd: Math.round(((parseFloat(selectedProduct.productionPerHour.toString().replace(',', '.')) * avTime) / 60) * 100) / 100,
    });
  }

  createEntryForm() {
    this.entryForm = this.fb.group({
      rows: this.fb.array([]),
    });
  }

  get no_rows() {
    return this.entryForm.get('rows') as FormArray;
  }

  addRow() {
    this.no_rows.push(
      this.fb.group({
        date: [moment().subtract(1, 'days').startOf('day').toDate(), Validators.required, ],
        startTimeHour: ['08', [Validators.min(0), Validators.max(24)]],
        startTimeMinutes: ['00', [Validators.min(0), Validators.max(59)]],
        sapCode: ['', Validators.required],
        description: ['', Validators.required],
        noResult: [false],
        qunatityPc: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        qunatityTn: ['', [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,3})?$'), ], ],
        availableTime: ['', [Validators.required, Validators.pattern('^[0-9]*$')], ],
        qunatityBd: ['0', Validators.required],
      })
    );
    this.noResult[this.no_rows.length - 1] = false;
  }

  deleteRowClick() {
    this.no_rows.removeAt(this.no_rows.length - 1);
  }

  saveClick() {
    this.no_rows.markAllAsTouched();
    if (!this.no_rows.invalid) {
      for (let i = 0; i < this.no_rows.controls.length; i++) {
        if (!this.noResult[i]) {
          this.product.productionLine = 'Schlatter';
          const fullDate = new Date(this.no_rows.controls[i].value.date);
          fullDate.setHours(
            this.no_rows.controls[i].value.startTimeHour,
            this.no_rows.controls[i].value.startTimeMinutes
          );
          this.product.date = this.datepipe.transform(fullDate, 'yyyy-MM-dd hh:mm:ss');
          this.product.startTime = this.no_rows.controls[i].value.startTime;
          this.product.sapCode = this.no_rows.controls[i].value.sapCode;
          this.product.description = this.no_rows.controls[i].value.description;
          this.product.quantityPieces = this.no_rows.controls[i].value.qunatityPc;
          this.product.quantityTons = this.no_rows.controls[i].value.qunatityTn;
          this.product.availableTime = this.no_rows.controls[i].value.availableTime;
          console.log(this.product.date);
          this.product.budgetedQunatity = this.no_rows.controls[i].value.qunatityBd;

          this.meshProductService
            .schlatterEntry(this.product as MorningEntryProduct)
            .subscribe((next) => {
                console.log('Profile ', i, 'updated successfully');
                window.location.reload();
              },
              (error) => {
                console.log(this.product.sapCode);
                console.log('greshka pri editieanjeto na ', i);
              }
            );
        }
      }
    }
  }

  typeaheadNoResults(event: boolean, i: number): void {
    this.noResult[i] = event;
  }

  loadEntries() {
    this.morningProductService.getMorningEntry().subscribe(
      (morningEntryProducts: MorningEntryProduct[]) => {
        this.morningEntryProducts = morningEntryProducts.filter((x) => x.productionLine === 'Schlatter');
        console.log('Uspesho prevzemanje');
        console.log(this.morningEntryProducts);
        this.morningEntryProducts.sort((a, b) => +new Date(a.date) - +new Date(b.date));
        console.log(this.morningEntryProducts);
      },
      (error) => {
        console.log('Nastana greshka pri prevzemanjeto');
      }
    );
  }
}
