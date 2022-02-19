import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShowInvoice } from '../invoice/showinvoice.model';

@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {

  showinvoice = new ShowInvoice()
  showinvoices: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this. getShowInvoice()
  }


  
  getShowInvoice() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8082/showinvoice/getAll', { headers })
      .subscribe(map => {
        console.log(map.Data);
        this.showinvoices = map.Data;
      })
  }

  
  // editPurchase(medi: any) {
  //   this.showinvoice.mname = invo.mname
  //   this.showinvoice.mgname = medi.mgname
    
  //   console.log(this.showinvoice);
  //   this.router.navigate(['showinvoice'], { state: { invo:  isSave: false } })
   
    
  // }

  deleteShowInvoice(invo: any) {
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8082/showinvoice/delete/" + invo.id, { headers: headers })
      .subscribe(data => {
        this. getShowInvoice();
      }
      )
  }

}
