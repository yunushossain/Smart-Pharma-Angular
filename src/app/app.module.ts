import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { MedicinelistComponent } from './components/medicinelist/medicinelist.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SupplierlistComponent } from './components/supplierlist/supplierlist.component';
import { InvoicelistComponent } from './components/invoicelist/invoicelist.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PurchaselistComponent } from './components/purchaselist/purchaselist.component';
import { MedecinestockComponent } from './components/medecinestock/medecinestock.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
   
  
    InvoiceComponent,
           MedicineComponent,
           MedicinelistComponent,
           SupplierComponent,
           SupplierlistComponent,
           InvoicelistComponent,
           CustomerComponent,
           CustomerlistComponent,
           PurchaseComponent,
           PurchaselistComponent,
           MedecinestockComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
