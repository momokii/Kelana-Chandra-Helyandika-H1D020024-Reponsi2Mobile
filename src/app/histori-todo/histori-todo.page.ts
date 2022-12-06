import { Component, OnInit } from '@angular/core';

import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-histori-todo',
  templateUrl: './histori-todo.page.html',
  styleUrls: ['./histori-todo.page.scss'],
})
export class HistoriTodoPage{

  id_todo: any;
  nama: any;
  deskripsi: any;
  nama_user: any;
  todolist_histori: any[] = [];

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router
  ) {
    this.getToDoHistori();
   }

  ngOnInit() {
    this.nama_user = this._apiService.loadToken();
  }

  ionViewDidLoad() {
    console.log("Jika selesai loading");
    this.getToDoHistori();
  }

  getToDoHistori(){
    this._apiService.getToDoHistori().subscribe((res: any)=> {
      console.log('sukses', res);
      this.todolist_histori = res['data'];
    }, (error: any) => {
      console.log('gagal', error);
      this.alertController.create({
        header: 'Notification',
        message: 'Gagal',
        buttons: ['OK']
      }).then( res => {
        res.present();
      })
    }
    )
  }

}
