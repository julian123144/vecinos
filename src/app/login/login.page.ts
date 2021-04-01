import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIResponse } from '../interfaces/APIResponse';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: any = {};
  public operation = 'login';
  public streets = [
    {id: 1, name: 'San Mateo'},
    {id: 2, name: 'San Roberto'},
    {id: 3, name: 'San Luis'},
  ];
  public credentials = {
    email: '',
    password: '',
    name: '',
    c_password: '',
    street: '',
    street_number: '',
  };
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  async presentToast(message, color = 'light') {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      color,
    });
    toast.present();
  }


  public login = () => {
    this.authenticationService.login(this.credentials).then((response: APIResponse) => {
      if (response.success) {
        window.localStorage.setItem('token', response.data.token);
        window.localStorage.setItem('col_user', JSON.stringify(response.data));
      }
      this.router.navigateByUrl('/home');
    }).catch(err => {
      console.log(err);
      this.presentToast('Ocurrió un error, por favor verifique sus credenciales e inténtelo de nuevo', 'danger');
    });
  }
  public register = () => {
    this.authenticationService.register(this.credentials).then((response: APIResponse) => {
      this.login();
    }).catch(err => {
      console.log(err);
      this.presentToast('Ocurrió un error, por favor verifique sus credenciales e inténtelo de nuevo', 'danger');
    });
  }
  public resetPassword = () => {}

  ionViewDidEnter = () => {
    this.user = JSON.parse(window.localStorage.getItem('col_user' || '{}'));
  }

  public logout = () => {
    if (confirm('Seguro que desea cerrar sesión?')) {
      this.user = {};
      window.localStorage.removeItem('col_user');
    }
  }

}
