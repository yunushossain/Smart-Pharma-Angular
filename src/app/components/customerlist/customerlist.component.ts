import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  Customer:any
  isCustomer:boolean=true
  searchQuery: any


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  searchItems(){
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/customer/search?searchText=' + this.searchQuery, { headers })
      .subscribe(map => {
        this.Customer = map.Data;
      })
  }


  getCustomer() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/customer/getAll', { headers })
      .subscribe(map => {
        console.log(map.Data);
        this.Customer = map.Data;
      })
  }

  editCustomer(cus: any) {
    this.router.navigate(['customer'], { state: { custo: cus, isSave: false } })
    this.Customer.cname = cus.cname
  }

  deleteCustomer(cus: any) {
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8082/customer/delete/" + cus.cid, { headers: headers })
      .subscribe(data => {
        this.getCustomer();
      }
      )
  }


}
