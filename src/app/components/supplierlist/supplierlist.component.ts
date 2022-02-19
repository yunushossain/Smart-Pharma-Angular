import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  Supplier:any
  isSupplier:boolean=true
  searchQuery: any

  ngOnInit(): void {

    this.getSupplier();
  }

  searchItems(){
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/supplier/search?searchText=' + this.searchQuery, { headers })
      .subscribe(map => {
        this.Supplier = map.Data;
      })
  }

  getSupplier() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/supplier/getAll', { headers })
      .subscribe(map => {
        console.log(map.Data);
        this.Supplier = map.Data;
      })
  }

  editSupplier(sup: any) {
    this.router.navigate(['supplier'], { state: { supp: sup, isSave: false } })
    this.Supplier.sname = sup.sname
  }

  deleteSupplier(sup: any) {
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8082/supplier/delete/" + sup.sid, { headers: headers })
      .subscribe(data => {
        this.getSupplier();
      }
      )
  }



}
