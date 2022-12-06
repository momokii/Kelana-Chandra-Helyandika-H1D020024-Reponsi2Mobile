import { Component, OnInit } from '@angular/core';

import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage{
  id_todo: any;
  nama: any;
  deskripsi: any;
  nama_user: any;
  todolist: any[] = [];

  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router
  ) {
    this.getToDo();
   }


  ngOnInit() {
    this.nama_user = this._apiService.loadToken();
  }

  ionViewDidLoad() {
    console.log("Jika selesai loading");
    this.getToDo();
  }


  getToDo(){
    this._apiService.getToDo().subscribe((res: any)=> {
      console.log('sukses', res);
      this.todolist = res['data'];
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

  deleteToDo(id: any){
    this.alertController.create({
      header : 'Hapus data',
      message: 'Kamu yakin untuk menghapusnya?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan')
          }
        },
        {
          text: 'Ya, Hapus',
          handler: (data: any) => {
            // jika ditekan


            this._apiService.deleteToDo(id);
            console.log('tes');

    }}]
    }).then(res => {
      res.present();
    })
  }

  selesaiToDo(id: any){
    this.alertController.create({
      header : 'Selesai ToDo',
      message: 'Sudah Selesai?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan')
          }
        },
        {
          text: 'Ya',
          handler: (data: any) => {
            // jika ditekan


            this._apiService.selesaiToDo(id);

    }}]
    }).then(res => {
      res.present();
    })
  }








}
