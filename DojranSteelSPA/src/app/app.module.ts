import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './_components/value/value.component';
import { NavComponent } from './_components/nav/nav.component';
import { AuthService } from './_services/auth.service';
import { LoginComponent } from './_components/login/login.component';
import { WorkersComponent } from './_components/workers/workers.component';
import { ProductsComponent } from './_components/products/products.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { MeshProductService } from './_services/MeshProduct.service';
import { JwtModule } from '@auth0/angular-jwt';
import { MorningReportComponent } from './_components/morningReport/morningReport.component';
import { MeshProductComponent } from './_components/mesh-product/mesh-product.component';
import { MeshProductEditComponent } from './_components/mesh-product-edit/mesh-product-edit.component';
import { MeshProductEditResolver } from './_resolvers/mesh-product-edit.resolver';
import { MeshProductAddComponent } from './_components/mesh-product-add/mesh-product-add.component';
import { MeshProductivityComponent } from './_components/mesh-productivity/mesh-productivity.component';
import { SchlEntryComponent } from './_components/morningReport/schl-entry/schl-entry.component';
import { CommonModule } from '@angular/common';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      LoginComponent,
      WorkersComponent,
      ProductsComponent,
      MorningReportComponent,
      MeshProductComponent,
      MeshProductEditComponent,
      MeshProductAddComponent,
      MeshProductivityComponent,
      SchlEntryComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      // HttpModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      BsDropdownModule.forRoot(),
      ButtonsModule.forRoot(),
      BsDatepickerModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      AuthGuard,
      MeshProductService,
      MeshProductEditResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
