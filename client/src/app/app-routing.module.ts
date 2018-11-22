import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { UserprofileComponent } from "./admin/userprofile/userprofile.component";
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin', component: LoginComponent},
  { path: 'profile', component: UserprofileComponent, canActivate:[AuthGuard]},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
