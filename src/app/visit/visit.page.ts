import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AccessControlService } from '../services/access_control.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.page.html',
  styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {
  public visit: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private accessControlService: AccessControlService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.visit = this.router.getCurrentNavigation().extras.state.visit;
        console.log(this.visit);
      }
    });
  }

  deleteVisit = async () => {
    const response = await this.presentAlertConfirm();
    console.log(response);
  }

  async presentToast(message, color = 'light') {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      color,
    });
    toast.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Desea eliminar esta visita? Si no ha ingresado, ya no podrá ingresar con este código.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return false;
          }
        }, {
          text: 'Sí',
          handler: () => {
            this.accessControlService.delete(this.visit.id).then(response => {
              this.presentToast('Visita eliminada con  éxito');
              this.router.navigateByUrl('/visits');
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
