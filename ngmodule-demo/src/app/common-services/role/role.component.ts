import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [AuthenticationService]
})
export class RoleComponent implements OnInit {
  token: string = '';
  constructor(private authSvc: AuthenticationService) { }

  ngOnInit() {
    this.token = this.authSvc.getAuthToken();
  }

}
