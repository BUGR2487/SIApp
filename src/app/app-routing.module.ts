import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'contacto-confianza',
    loadChildren: () => import('./pages/contacto-confianza/contacto-confianza.module').then( m => m.ContactoConfianzaPageModule)
  },
  {
    path: 'pantalla-principal',
    loadChildren: () => import('./pages/pantalla-principal/pantalla-principal.module').then( m => m.PantallaPrincipalPageModule)
  },
  {
    path: 'ruta',
    loadChildren: () => import('./pages/ruta/ruta.module').then( m => m.RutaPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'lista-contactos',
    loadChildren: () => import('./pages/lista-contactos/lista-contactos.module').then( m => m.ListaContactosPageModule)
  },
  {
    path: 'desactivar-alarma',
    loadChildren: () => import('./pages/desactivar-alarma/desactivar-alarma.module').then( m => m.DesactivarAlarmaPageModule)
  },
  {
    path: 'verificar-seguridad',
    loadChildren: () => import('./pages/verificar-seguridad/verificar-seguridad.module').then( m => m.VerificarSeguridadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
