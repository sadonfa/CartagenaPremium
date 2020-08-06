import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio-de-sesion',
    loadChildren: () => import('./pages/inicio-de-sesion/inicio-de-sesion.module').then( m => m.InicioDeSesionPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'pagar',
    loadChildren: () => import('./pages/pagar/pagar.module').then( m => m.PagarPageModule)
  },
  {
    path: 'cancelar',
    loadChildren: () => import('./pages/cancelar/cancelar.module').then( m => m.CancelarPageModule)
  },
  {
    path: 'cerrar',
    loadChildren: () => import('./pages/cerrar/cerrar.module').then( m => m.CerrarPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
