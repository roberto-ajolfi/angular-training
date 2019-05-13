import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  token: string = '';
  constructor(private authSvc: AuthenticationService) { }

  ngOnInit() {
    this.token = this.authSvc.getAuthToken();
  }

}
