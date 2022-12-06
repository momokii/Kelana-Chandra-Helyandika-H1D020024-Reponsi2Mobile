import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriTodoPageRoutingModule } from './histori-todo-routing.module';

import { HistoriTodoPage } from './histori-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriTodoPageRoutingModule
  ],
  declarations: [HistoriTodoPage]
})
export class HistoriTodoPageModule {}
