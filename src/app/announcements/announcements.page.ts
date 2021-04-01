import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { APIResponse } from '../interfaces/APIResponse';
import { AccessControlService } from '../services/access_control.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.page.html',
  styleUrls: ['./announcements.page.scss'],
})
export class AnnouncementsPage implements OnInit {
  public announcements: any[] = [];
  constructor(
    private accesosService: AccessControlService,
    private router: Router,
    private utilsService: UtilsService,
    private loadincController: LoadingController,
  ) { 
  }

  getAnnouncements = async() => {
    const announcementLoader = await (await this.loadincController.create({message: 'Obteniendo Anuncios'}));
    await announcementLoader.present();
    this.accesosService.getAll().then((response: APIResponse) => {
      this.announcements = response.data.map(announcements => { 
        return {
          ...announcements,
          initals: this.utilsService.calculateInitals(announcements.announcements_name),
          announcements_date_formatted: this.utilsService.dateToOurDate(announcements.announcements_date),
        };
      });
      announcementLoader.dismiss();
      console.log(this.announcements);
    }).catch(err => {
      console.log(err);
      announcementLoader.dismiss();
    });
  }

  ionViewDidEnter() {
    this.getAnnouncements();
  }

  ngOnInit() {
  }

  goToAnnouncements = (announcement) => {
    const navigationExtras: NavigationExtras = {
      state: {
        announcement:announcement
      }
    };
    this.router.navigate(['/announcement'], navigationExtras);
  }
}