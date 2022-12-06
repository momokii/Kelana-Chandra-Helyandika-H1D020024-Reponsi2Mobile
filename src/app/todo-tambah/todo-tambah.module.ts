import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoTambahPageRoutingModule } from './todo-tambah-routing.module';

import { TodoTambahPage } from './todo-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoTambahPageRoutingModule
  ],
  declarations: [TodoTambahPage]
})
export class TodoTambahPageModule {}
