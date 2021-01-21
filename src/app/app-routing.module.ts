import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [LoginGuardService],
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'superdashboard',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./protected/superdashboard/superdashboard.module').then( m => m.SuperdashboardPageModule)
  },
  {
    path: 'patientattributes',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./protected/patientattributes/patientattributes.module').then( m => m.PatientattributesPageModule)
  },
  {
    path: 'patientdates',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./protected/patientdates/patientdates.module').then( m => m.PatientdatesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
