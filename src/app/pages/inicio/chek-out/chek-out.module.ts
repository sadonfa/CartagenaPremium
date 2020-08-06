import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChekOutPageRoutingModule } from './chek-out-routing.module';

import { ChekOutPage } from './chek-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChekOutPageRoutingModule
  ],
  declarations: [ChekOutPage]
})
export class ChekOutPageModule {}
