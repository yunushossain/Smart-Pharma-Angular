import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine/medicine.model';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  medicine = new Medicine()
  medicines: any
  searchQuery: any


  ngOnInit(): void {
    this.getMedicine()
  }

  searchItems() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/medicine/search?searchText=' + this.searchQuery, { headers })
      .subscribe(map => {
        this.medicines = map.Data;
      })
  }


  getMedicine() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/medicine/getAll', { headers })
      .subscribe(map => {
        console.log(map.Data);
        this.medicines = map.Data;
      })
  }
 

  editMedicine(medi: any) {
    this.medicine.mname = medi.mname
    this.medicine.mgname = medi.mgname
    this.medicine.mpaking = medi.mpaking
    this.medicine.sname = medi.sname
    console.log(this.medicine);
    this.router.navigate(['medicine'], { state: { medi: medi, isSave: false } })
   
    
  }

  deleteMedicine(medi: any) {
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8082/medicine/delete/" + medi.mid, { headers: headers })
      .subscribe(data => {
        this.getMedicine();
      }
      )
  }


}
