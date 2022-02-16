import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  image:String="assets/image/m.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
