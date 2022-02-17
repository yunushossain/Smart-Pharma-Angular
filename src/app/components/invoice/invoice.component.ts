import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { Customer } from '../customer/customer.model';
import { Purchase } from '../purchase/purchase.model';
import { Invoice } from './invoice.motel';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice = new Invoice()
  allinvoices: Invoice[] = []
  isSave: boolean = true
  customers: any
  purchases: any
  querypurchase: any
  query: any

  totalAmount: any
  totalDiscount: any
  netTotal: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    if (history.state.isSave != undefined) {
      this.invoice = history.state.invoice
      this.isSave = history.state.isSave

      console.log(history.state.invoice);
    }
    this.addrow()


  }

  searchCustomer() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/customer/search?searchText=' + this.query, { headers },)
      .subscribe(map => {
        console.log(map.Data);
        this.customers = map.Data;
      })


  }

  setSelected(customer: Customer) {
    console.log(customer);
    this.invoice.cname = customer.cname
    this.invoice.caddress = customer.caddress
    this.invoice.cemail = customer.cemail
    this.invoice.ccontact = customer.ccontact
    this.invoice.cdname = customer.cdname


  }

  setSelectedMedechine(purchase: Purchase, i: number) {
    console.log(purchase);
    this.allinvoices[i].mname = purchase.mname;
    this.allinvoices[i].batchid = purchase.batchid;
    this.allinvoices[i].avalaquantity = purchase.quantity;
    this.allinvoices[i].expdate = purchase.expdate;
    this.allinvoices[i].mrp = purchase.mrp;



  }
  addrow() {
    this.allinvoices.push(new Invoice());
  }

  deleterow(i:number) {
    this.allinvoices.splice(i, 1);

  }


  searchPurchase() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/purchase/search?searchText=' + this.querypurchase, { headers },)
      .subscribe(map => {
        console.log(map.Data);
        this.purchases = map.Data;
      })


  }

  calculatePrice(i: number) {
    if (this.allinvoices[i].invquantity > this.allinvoices[i].avalaquantity) {
      this.allinvoices[i].invquantity = this.allinvoices[i].avalaquantity
    }

    this.allinvoices[i].discountamount = (this.allinvoices[i].invquantity * this.allinvoices[i].mrp) * (this.allinvoices[i].discount / 100)

    this.allinvoices[i].invtotal = (this.allinvoices[i].invquantity * this.allinvoices[i].mrp) - this.allinvoices[i].discountamount


   this. calculateTotal()
  }


  calculateTotal() {
    this.totalAmount = 0
    this.totalDiscount = 0
    this.netTotal = 0

    this.allinvoices.forEach(invoice => {

      this.totalAmount += (invoice.mrp * invoice.invquantity)
      this.totalDiscount += invoice.discountamount
      this.netTotal += invoice.invtotal
    })
  }


}


