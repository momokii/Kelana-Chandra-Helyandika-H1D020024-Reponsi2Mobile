import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController , LoadingController} from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-todo-tambah',
  templateUrl: './todo-tambah.page.html',
  styleUrls: ['./todo-tambah.page.scss'],
})
export class TodoTambahPage implements OnInit {

  nama: any;
  deskripsi: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }


  addToDo(){
    let url = this._apiService.apiURL() + "/todo";
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json'},
      data: {
        nama_todo: this.nama,
        deskripsi_todo: this.deskripsi
      },
    }).then((data)=>{
      this.nama = '';
      this.deskripsi = '';
      this.alertController.create({
        header: 'Notif',
        message: 'Berhasil tambah daftar ToDo',
      }).then(res => {
        location.reload();
        res.present();
      });
      this.router.navigateByUrl('/');
    }, (error) => {
      this.alertController.create({
        header: 'Notif',
        message: 'Gagal input data',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }



}
