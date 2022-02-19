import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase/purchase.model';

@Component({
  selector: 'app-purchasereport',
  templateUrl: './purchasereport.component.html',
  styleUrls: ['./purchasereport.component.css']
})
export class PurchasereportComponent implements OnInit {
  purchase = new Purchase()
  purchases: any

  constructor(private http: HttpClient) { }

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
 
}
