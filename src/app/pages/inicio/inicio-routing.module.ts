import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  { path: 'inicio', component: InicioPage},
  {
    path: 'chek-in',
    loadChildren: () => import('./chek-in/chek-in.module').then( m => m.ChekInPageModule)
  },
  {
    path: 'chek-out',
    loadChildren: () => import('./chek-out/chek-out.module').then( m => m.ChekOutPageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
