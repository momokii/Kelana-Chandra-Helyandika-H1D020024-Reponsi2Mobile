import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  nama: any; //init variable nama untuk namauser
  token: any;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit() {
    this.logout();
  }
  //ceksesi untuk mengambil nama user
  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('username');
    } else {
      this.router.navigateByUrl('/login');
    }
  }


  //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }


}
