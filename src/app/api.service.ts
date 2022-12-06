import { Injectable } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@capacitor-community/http';
import { AlertController } from '@ionic/angular';


import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  nama: any; //init variable nama untuk namauser
  token: any;
  constructor(
    public http: HttpClient,
    private alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  // link ApiService
  apiURL(){
    return 'http://kelanachandra66.pythonanywhere.com';
  }

    //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halaman login
  }


  loadToken() {
    this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('nama');
      return this.nama;
    } else {
      this.router.navigateByUrl('/login');
    }
  }


  getToDo(){
    return this.http.get(this.apiURL()+'/todo');
  }

  getToDoHistori(){
    return this.http.get(this.apiURL()+'/todo/histori');
  }


  deleteToDo(id: any){
    return Http.request({
      method : 'DELETE',
      url: this.apiURL()+'/todo',
      headers: { 'Content-Type': 'application/json'},
      data: {
        id: id,
      }
    }).then((data) => {
      console.log(data['data']['status']);
      if (data['data']['status'] == 'success') {
        this.alertController.create({
          header: 'Notif',
          message: 'Selesai',
          buttons: ['OK']
        }).then( res => {
          location.reload();
        });
      } else {
        this.alertController.create({
          header: 'Notif',
          message: 'Gagal',
          buttons: ['OK']
        }).then( res => {
          res.present();
        });
      }
    })
  }

  selesaiToDo(id: any){
    return Http.request({
      method : 'POST',
      url: this.apiURL()+'/selesai',
      headers: { 'Content-Type': 'application/json'},
      data: {
        id: id,
      }
    }).then((data) => {
      console.log(data['data']['status']);
      if (data['data']['status'] == 'success') {
        this.alertController.create({
          header: 'Notif',
          message: 'Berhasil',
          buttons: ['OK']
        }).then( res => {
          location.reload();
        });
      } else {
        this.alertController.create({
          header: 'Notif',
          message: 'Gagal',
          buttons: ['OK']
        }).then( res => {
          res.present();
        });
      }
    })
  }


  getToDoSingle(id: any){
    return this.http.get(this.apiURL()+'/todo/'+id);
  }












}
