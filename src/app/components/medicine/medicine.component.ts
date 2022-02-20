import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Medicine } from './medicine.model';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  medicine = new Medicine();

  supplierItems: any
  isSave: boolean = true
  
  constructor(private http: HttpClient ) {
   
  }

  
  ngOnInit(): void {
    this.getSupplier();
    if (history.state.isSave != undefined) {
      this.medicine = history.state.medi
      this.isSave = history.state.isSave
      
      console.log(history.state.medi);
    }

  }

  
  selectedSupplier: String = '';

  onRowClick() {
    this.medicine.sname = this.selectedSupplier

  }

  getSupplier() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/supplier/getAll', { headers })
      .subscribe(map => {
        console.log(map.Data);
        this.supplierItems = map.Data;
      })
  }


  saveMedicine() {
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:8082/medicine/save", JSON.stringify(this.medicine), { headers: headers })
      .subscribe(data => {
       
      }, err => {
        alert("Medicine Added Failed")
      }
      )
  }




  updateMedicine() {
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:8082/medicine/update", JSON.stringify(this.medicine), { headers: headers })
      .subscribe(data => {
        this.medicine = new Medicine()
        alert("Medicine Updated Successfully")
        this.isSave = true
      }
      )
  }


  


}
