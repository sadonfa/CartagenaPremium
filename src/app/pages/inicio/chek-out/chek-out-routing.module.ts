import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChekOutPage } from './chek-out.page';

const routes: Routes = [
  {
    path: '',
    component: ChekOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChekOutPageRoutingModule {}
