import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { UserprofileComponent } from "./admin/userprofile/userprofile.component";
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CelebritydataComponent } from './admin/celebrityprofile/celebritydata/celebritydata.component';
import { CelebrityaddComponent } from './admin/celebrityprofile/celebrityadd/celebrityadd.component';
import { CelebrityeditComponent } from './admin/celebrityprofile/celebrityedit/celebrityedit.component';


import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin', component: LoginComponent},
  { path: 'profile', component: UserprofileComponent, canActivate:[AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'getUserProfile', component: UserprofileComponent, canActivate:[AuthGuard]},
  { path: 'logout', component: UserprofileComponent, canActivate:[AuthGuard]},
  { path: 'celebrity', component: CelebritydataComponent, canActivate:[AuthGuard]},
  { path: 'addCelebrity', component: CelebrityaddComponent, canActivate:[AuthGuard]},
  { path: 'editCelebrity', component: CelebrityeditComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
