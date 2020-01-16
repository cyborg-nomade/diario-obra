import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { LoginComponent } from './admin/login/login.component';
import { DiarioComponent } from './diario/diario.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'addusuario', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'diario', component: DiarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
