import { Component, OnInit } from '@angular/core';
import { MeshProductService } from '../../_services/MeshProduct.service';
import { MeshProductivity } from 'src/app/_models/meshProductivity';

@Component({
  selector: 'app-mesh-productivity',
  templateUrl: './mesh-productivity.component.html',
  styleUrls: ['./mesh-productivity.component.css']
})
export class MeshProductivityComponent implements OnInit {

  meshProductivity: MeshProductivity[];
  show = false;

  constructor(private meshProductService: MeshProductService) { }

  ngOnInit() {
    this.loadProductivity();
  }
  loadProductivity() {
    this.meshProductService.getEfectivities().subscribe((meshProductivity: MeshProductivity[]) => {
      this.meshProductivity = meshProductivity;
      console.log(meshProductivity);
    }, error => {
      console.log('Nastana greshka pri prevzemanjeto');
    });
  }
  saveChanges() {

   }
   showtoogle() {
    this.show = !this.show;
   }
}
