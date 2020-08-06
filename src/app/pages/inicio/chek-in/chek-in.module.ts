import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChekInPageRoutingModule } from './chek-in-routing.module';

import { ChekInPage } from './chek-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChekInPageRoutingModule
  ],
  declarations: [ChekInPage]
})
export class ChekInPageModule {}
