import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShowInvoice } from '../invoice/showinvoice.model';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent implements OnInit {
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
}
