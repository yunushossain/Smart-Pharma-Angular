import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoicelistComponent } from './components/invoicelist/invoicelist.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MedecinestockComponent } from './components/medecinestock/medecinestock.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { MedicinelistComponent } from './components/medicinelist/medicinelist.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PurchaselistComponent } from './components/purchaselist/purchaselist.component';
import { PurchasereportComponent } from './components/purchasereport/purchasereport.component';
import { SalesreportComponent } from './components/salesreport/salesreport.component';
import { SignupComponent } from './components/signup/signup.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SupplierlistComponent } from './components/supplierlist/supplierlist.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent}, 
  {path: "signUp", component: SignupComponent},

  {path: "", component: LayoutComponent, canActivateChild: [AuthGuard],  children:[
    {path: "", component: DashboardComponent},
    {path: "purchase", component:PurchaseComponent},
    {path: "purchaselist", component:PurchaselistComponent},
    {path: "purchasereport", component:PurchasereportComponent},
    {path: "salesreport", component:SalesreportComponent},
    {path: "medecinestock", component:MedecinestockComponent},
    {path: "supplier", component:SupplierComponent},
    {path: "customer", component:CustomerComponent},
    {path: "customerlist", component:CustomerlistComponent},
    {path: "supplierlist", component:SupplierlistComponent},
    {path: "medicine", component:MedicineComponent},
    {path: "medicinelist", component:MedicinelistComponent},
    {path: "invoice", component: InvoiceComponent},
    {path: "invoicelist", component:InvoicelistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
