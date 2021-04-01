import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Visitas', url: '/visits', icon: 'people' },
    { title: 'Directorio', url: '/suppliers', icon: 'build' },
    { title: 'Pagos', url: '/payments', icon: 'card' },
    { title: 'Finanzas', url: '/finances', icon: 'cash' },
    { title: 'Morosos', url: '/defaulters', icon: 'alarm' },
    { title: 'Reservaciones', url: '/reservations', icon: 'calendar' },
    { title: 'Encuestas', url: '/surveys', icon: 'bar-chart' },
    { title: 'Reglamentos', url: '/regulations', icon: 'file-tray-full' },
    { title: 'Contacto', url: '/contact', icon: 'mail' },
    { title: 'Perfil', url: '/login', icon: 'person' },
  ];
  public user: any;
  constructor() {
    this.user = JSON.parse(window.localStorage.getItem('col_user') || '{}');
  }

  ionViewDidEnter() {
    this.user = JSON.parse(window.localStorage.getItem('col_user') || '{}');
    console.log(this.user);
  }
}
