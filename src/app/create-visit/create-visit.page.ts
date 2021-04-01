import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIResponse } from '../interfaces/APIResponse';
import { Visit } from '../interfaces/Visit';
import { AccessControlService } from '../services/access_control.service';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.page.html',
  styleUrls: ['./create-visit.page.scss'],
})
export class CreateVisitPage implements OnInit {
  public visitForm;
  public visit: Visit = {
    visitor_name: '',
    visit_date: null,
    isRecurring: false,
    comments: '',
    user_address_id: null,
  };
  public addressId: any;
  public user: any;
  public addresses: any[] = null;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accessControlService: AccessControlService,
    private toastController: ToastController,
  ) { 
    this.visitForm = this.formBuilder.group({
      visitorName: ['', Validators.required],
      isFrequent: [false],
      visitDate: [''],
      comments: [''],
      user_address_id: [''],
    });
    this.user = JSON.parse(window.localStorage.getItem('col_user') || '{}');
    if (this.user && this.user.user && this.user.user.addresses) {
      if (this.user.user.addresses.length > 0) {
        this.addresses = this.user.user.addresses;
        this.visitForm.controls['user_address_id'].setValue(this.user.user.addresses[0].id);
      }
    }
  }

  async presentToast(message, color = 'light') {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      color,
    });
    toast.present();
  }

  ngOnInit() {
  }

  cancel = () => {
    if (confirm('Desea cancelar?')) {
      this.router.navigateByUrl('/visits');
    }
  }

  save = () => {
    let dateToFormat: any;
    if (this.visitForm.value.visitDate) {
      dateToFormat = new Date(this.visitForm.value.visitDate);
      dateToFormat = `${dateToFormat.getFullYear()}-${dateToFormat.getMonth()+1}-${dateToFormat.getDate()}`;
    }
    this.visit = {
      visitor_name: this.visitForm.value.visitorName,
      visit_date: dateToFormat,
      isRecurring: this.visitForm.value.isFrequent,
      comments: this.visitForm.value.comments,
      user_address_id: this.visitForm.value.user_address_id,
      isDailyAccess: true,
    };
    this.accessControlService.create(this.visit).then((response: APIResponse) => {
      const navigationExtras: NavigationExtras = {
        state: {
          visit: response.data
        }
      };
      this.presentToast('Su visita fue dada de alta correctamente');
      this.router.navigate(['/visit'], navigationExtras);
    }).catch(error => {
      this.presentToast(`Ocurrió un error al dar de alta su visita: ${JSON.stringify(error)}`);
      console.log(error);
    });
    
  }

  changeAddress = (e) => {
    console.log(e);
  }

}
