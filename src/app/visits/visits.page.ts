import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { APIResponse } from '../interfaces/APIResponse';
import { AccessControlService } from '../services/access_control.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-visitas',
  templateUrl: './visits.page.html',
  styleUrls: ['./visits.page.scss'],
})
export class VisitsPage implements OnInit {
  public visits: any[] = [];
  constructor(
    private accesosService: AccessControlService,
    private router: Router,
    private utilsService: UtilsService,
    private loadincController: LoadingController,
  ) { 
  }

  getVisits = async() => {
    const visitLoader = await (await this.loadincController.create({message: 'Obteniendo Visitas'}));
    await visitLoader.present();
    this.accesosService.getAll().then((response: APIResponse) => {
      this.visits = response.data.map(visit => { 
        return {
          ...visit,
          initals: this.utilsService.calculateInitals(visit.visitor_name),
          visit_date_formatted: this.utilsService.dateToOurDate(visit.visit_date),
        };
      });
      visitLoader.dismiss();
      console.log(this.visits);
    }).catch(err => {
      console.log(err);
      visitLoader.dismiss();
    });
  }

  ionViewDidEnter() {
    this.getVisits();
  }

  ngOnInit() {
  }

  goToVisit = (visit) => {
    const navigationExtras: NavigationExtras = {
      state: {
        visit: visit
      }
    };
    this.router.navigate(['/visit'], navigationExtras);
  }
}
