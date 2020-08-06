import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChekInPage } from './chek-in.page';

const routes: Routes = [
  {
    path: '',
    component: ChekInPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChekInPageRoutingModule {}
