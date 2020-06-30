import { Routes } from '@angular/router';
import { WorkersComponent } from './_components/workers/workers.component';
import { ValueComponent } from './_components/value/value.component';
import { AuthGuard } from './_guards/auth.guard';
import { MorningReportComponent } from './_components/morningReport/morningReport.component';
import { MeshProductComponent } from './_components/mesh-product/mesh-product.component';
import { MeshProductEditComponent } from './_components/mesh-product-edit/mesh-product-edit.component';
import { MeshProductEditResolver } from './_resolvers/mesh-product-edit.resolver';
import { MeshProductAddComponent } from './_components/mesh-product-add/mesh-product-add.component';
import { MeshProductivityComponent } from './_components/mesh-productivity/mesh-productivity.component';
import { SchlEntryComponent } from './_components/morningReport/schl-entry/schl-entry.component';


export const appRoutes: Routes = [
    { path: 'home', component: MorningReportComponent },
    { path: 'workers', component: WorkersComponent, canActivate: [AuthGuard] },
    { path: 'meshproducts', component: MeshProductComponent },
    { path: 'meshproductedit/:id', component: MeshProductEditComponent, resolve: {meshproduct: MeshProductEditResolver} },
    { path: 'meshproductadd', component: MeshProductAddComponent },
    { path: 'meshProductivity', component: MeshProductivityComponent },
    { path: 'values', component: ValueComponent },
    { path: 'schlentry', component: SchlEntryComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },


];

