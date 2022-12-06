import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'todolist',
    loadChildren: () => import('./todolist/todolist.module').then( m => m.TodolistPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'todo-tambah',
    loadChildren: () => import('./todo-tambah/todo-tambah.module').then( m => m.TodoTambahPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'todo-edit/:id',
    loadChildren: () => import('./todo-edit/todo-edit.module').then( m => m.TodoEditPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'histori-todo',
    loadChildren: () => import('./histori-todo/histori-todo.module').then( m => m.HistoriTodoPageModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
