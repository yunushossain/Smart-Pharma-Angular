import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { Customer } from '../customer/customer.model';
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
  query: any
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
  addrow() {
    this.allinvoices.push(this.invoice);
  }
  deleterow() {
this.allinvoices.splice(1,1);
  
  }

}


