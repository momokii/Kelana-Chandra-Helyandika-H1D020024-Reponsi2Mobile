import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Daftar ToDo', url: '/todolist', icon: 'mail' },
    { title: 'Histori ToDoList', url: '/histori-todo', icon: 'sync' },
    { title: 'Logout', url: '/logout', icon: 'exit' },
  ];


  constructor() {}
}
