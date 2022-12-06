import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController , LoadingController} from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.page.html',
  styleUrls: ['./todo-edit.page.scss'],
})
export class TodoEditPage implements OnInit {

  nama: any;
  id: any;
  deskripsi: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) {
    this.route.params.subscribe((params: any) => {
    this.id = params.id;
    console.log(this.id);
    this.ambilToDo(this.id);})
  }

  ngOnInit() {
  }


  ambilToDo(id: any){
    this._apiService.getToDoSingle(id).subscribe((res: any) => {
      console.log('sukses', res);
      let makanan = res['data'];
      this.nama = makanan.nama;
      this.deskripsi = makanan.deskripsi;
      this.id = makanan.id;
    },(error: any) => {
      console.log('eror', error);
      alert('gagal');
    })
  }

  editToDo(){
    let url = this._apiService.apiURL()+'/todo';
    Http.request({
      method : 'PUT',
      url : url,
      headers : { "Content-Type" : "application/json" },
      data : {
        id : this.id,
        nama_baru : this.nama,
        deskripsi_baru : this.deskripsi
      },
    }).then((data) => {
      console.log(data)
      this.alertController.create({
        header : 'Notif',
        message : 'berhasil Edit ToDo'
      }).then(res => {
        location.reload();
        res.present();
      });
      this.router.navigateByUrl('/');
    }, (err)=>{
      this.alertController.create({
        header: 'Notif',
        message: 'Gagal Edit',
        buttons : ['OK']
      }).then( res => {
        res.present();
      });

    })
  }




}
