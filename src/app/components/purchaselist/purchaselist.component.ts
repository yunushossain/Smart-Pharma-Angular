import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from '../purchase/purchase.model';

@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.css']
})
export class PurchaselistComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  purchase = new Purchase()
  purchases: any

  ngOnInit(): void {
    this.getPurchase()
  }


  getPurchase() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/purchase/getAll', { headers })
      .subscribe(map => {
        console.log(map.Data);
        this.purchases = map.Data;
      })
  }
 

  
  editPurchase(medi: any) {
    this.purchase.mname = medi.mname
    this.purchase.mgname = medi.mgname
    
    console.log(this.purchase);
    this.router.navigate(['purchase'], { state: { medi: medi, isSave: false } })
   
    
  }

  deletePurchase(purch: any) {
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8082/purchase/delete/" + purch.pid, { headers: headers })
      .subscribe(data => {
        this.getPurchase();
      }
      )
  }

}
