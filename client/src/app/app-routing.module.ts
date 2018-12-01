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
import { AddcategoryComponent } from './admin/profilecategory/addcategory/addcategory.component';
import { EditcategoryComponent } from './admin/profilecategory/editcategory/editcategory.component';
import { CategorydataComponent } from './admin/profilecategory/categorydata/categorydata.component';
import { MoviesdataComponent } from "./admin/movies/moviesdata/moviesdata.component";
import { MoviesaddComponent } from "./admin/movies/moviesadd/moviesadd.component";
import { MovieseditComponent } from "./admin/movies/moviesedit/moviesedit.component";
import { NewsdataComponent } from "./admin/news/newsdata/newsdata.component";
import { NewsaddComponent } from "./admin/news/newsadd/newsadd.component";
import { NewseditComponent } from "./admin/news/newsedit/newsedit.component";

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
  { path: 'editCelebrity/:id', component: CelebrityeditComponent, canActivate:[AuthGuard]},
  { path: 'category', component: CategorydataComponent, canActivate:[AuthGuard]},
  { path: 'addCategory', component: AddcategoryComponent, canActivate:[AuthGuard]},
  { path: 'editCategory/:id', component: EditcategoryComponent, canActivate:[AuthGuard]},
  { path: 'movies', component: MoviesdataComponent, canActivate:[AuthGuard]},
  { path: 'editMovie/:id', component: MovieseditComponent, canActivate:[AuthGuard]},
  { path: 'addMovie', component: MoviesaddComponent, canActivate:[AuthGuard]},
  { path: 'news', component: NewsdataComponent, canActivate:[AuthGuard]},
  { path: 'editNews/:id', component: NewseditComponent, canActivate:[AuthGuard]},
  { path: 'addNews', component: NewsaddComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
