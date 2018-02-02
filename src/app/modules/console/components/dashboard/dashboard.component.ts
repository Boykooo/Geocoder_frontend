import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private titleService: Title,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.checkLogin();
    this.titleService.setTitle("Dashboard");
  }
}
