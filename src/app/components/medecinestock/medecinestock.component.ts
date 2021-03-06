import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase/purchase.model';

@Component({
  selector: 'app-medecinestock',
  templateUrl: './medecinestock.component.html',
  styleUrls: ['./medecinestock.component.css']
})
export class MedecinestockComponent implements OnInit {

  constructor(private http: HttpClient) { }

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
 
}
