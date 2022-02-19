import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Purchase } from './purchase.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchase=new Purchase()
 
  supplierItems: any
  isSave: boolean = true
  selectedSupplier: String = '';
  gtotal = 0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.gtotal);
    

    this.getSupplier();
    if (history.state.isSave != undefined) {
      this.purchase = history.state.purch
      this.isSave = history.state.isSave
      
      console.log(history.state.purch);
    }

   

  }

  

 


  onRowClick() {
    this.purchase.sname = this.selectedSupplier

  }


  getSupplier() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/supplier/getAll', { headers })
      .subscribe(map => {
        console.log(map.Data);
        this.supplierItems = map.Data;
      })
  }

  savePurchase() {
    console.log(this.purchase.gtotal);
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:8082/purchase/save", JSON.stringify(this.purchase), { headers: headers })
      .subscribe(data => {
        
      }, err => {
        alert("Medicine Added Failed")
      }
      )
  }

  updatePurchase() {
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:8082/purchase/update", JSON.stringify(this.purchase), { headers: headers })
      .subscribe(data => {
        this.purchase = new Purchase()
        alert("Purchase update Successfully")
        this.isSave = true
      }
      )
  }

  calculateAmount(pc:Purchase){
    console.log("munazir");
    pc.amount =pc.quantity * pc.rate;
  }

}
