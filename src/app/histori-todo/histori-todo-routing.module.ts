import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriTodoPage } from './histori-todo.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriTodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriTodoPageRoutingModule {}
