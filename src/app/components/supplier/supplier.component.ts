import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier.model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplier =new Supplier()
  isSave: boolean = true

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    if (history.state.isSave != undefined) {
      this.supplier = history.state.supp
      this.isSave = history.state.isSave
     
      console.log(history.state.supp.sname);
      
    }
  }

  addSupplier(){
    
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:8082/supplier/save", JSON.stringify(this.supplier), { headers: headers })
      .subscribe(data => {
     
      },err =>{
        alert("Supplier already exist")
     }
      )
  }

  
  updateSupplier(){
    
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:8082/supplier/update", JSON.stringify(this.supplier), { headers: headers })
      .subscribe(data => {
        this.supplier = new Supplier()
        alert("Supplier Updated Successfully")
        this.isSave = true
      }
      )
  }


}
