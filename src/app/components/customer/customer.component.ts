import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer = new Customer();

 
  isSave: boolean = true

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (history.state.isSave != undefined) {
      this.customer = history.state.custo
      this.isSave = history.state.isSave
     
      console.log(history.state.custo.cname);
      
    }
    
  }


  
  saveCustomer() {
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:8082/customer/save", JSON.stringify(this.customer), { headers: headers })
      .subscribe(data => {
        alert("New Customer Added Successfull")
        this.customer = new Customer();
        this.isSave = true
      }, err => {
        alert("Medicine already exist")
      }
      )
  }




  updateCustomer() {
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:8082/customer/update", JSON.stringify(this.customer), { headers: headers })
      .subscribe(data => {
        this.customer = new Customer()
        alert("customer Updated Successfully")
        this.isSave = true
      }
      )
  }
}
