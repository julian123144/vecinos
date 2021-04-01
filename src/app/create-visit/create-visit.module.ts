import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVisitPageRoutingModule } from './create-visit-routing.module';

import { CreateVisitPage } from './create-visit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVisitPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateVisitPage]
})
export class CreateVisitPageModule {}
