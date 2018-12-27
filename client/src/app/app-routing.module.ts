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
import { GallerydataComponent } from "./admin/gallery/gallerydata/gallerydata.component";
import { GalleryaddComponent } from "./admin/gallery/galleryadd/galleryadd.component";
import { GalleryeditComponent } from "./admin/gallery/galleryedit/galleryedit.component";
import { NewsComponent } from "./website/news/news/news.component";
import { DetailnewsComponent } from "./website/news/detailnews/detailnews.component";
import { NowplayingdataComponent } from "./admin/nowplaying/nowplayingdata/nowplayingdata.component";
import { NowplayingaddComponent } from "./admin/nowplaying/nowplayingadd/nowplayingadd.component";
import { NowplayingeditComponent } from "./admin/nowplaying/nowplayingedit/nowplayingedit.component";
import { UpcomingdataComponent } from "./admin/upcoming/upcomingdata/upcomingdata.component";
import { UpcomingaddComponent } from "./admin/upcoming/upcomingadd/upcomingadd.component";
import { UpcomingeditComponent } from "./admin/upcoming/upcomingedit/upcomingedit.component";
import { ReviewdataComponent } from "./admin/moviereviews/reviewdata/reviewdata.component";
import { AddreviewComponent } from "./admin/moviereviews/addreview/addreview.component";
import { EditreviewComponent } from "./admin/moviereviews/editreview/editreview.component";

import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
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
  { path: 'addNews', component: NewsaddComponent, canActivate:[AuthGuard]},
  { path: 'gallery', component: GallerydataComponent, canActivate:[AuthGuard]},
  { path: 'addGallery', component: GalleryaddComponent, canActivate:[AuthGuard]},
  { path: 'editGallery/:id', component: GalleryeditComponent, canActivate:[AuthGuard]},
  { path: 'allNowPlaying', component: NowplayingdataComponent, canActivate:[AuthGuard]},
  { path: 'addNowPlaying', component: NowplayingaddComponent, canActivate:[AuthGuard]},
  { path: 'editNowPlaying/:id', component: NowplayingeditComponent, canActivate:[AuthGuard]},
  { path: 'allUpcoming', component: UpcomingdataComponent, canActivate:[AuthGuard]},
  { path: 'addUpcoming', component: UpcomingaddComponent, canActivate:[AuthGuard]},
  { path: 'editUpcoming/:id', component: UpcomingeditComponent, canActivate:[AuthGuard]},
  { path: 'allReviews', component: ReviewdataComponent, canActivate:[AuthGuard]},
  { path: 'addReview', component: AddreviewComponent, canActivate:[AuthGuard]},
  { path: 'editReview/:id', component: EditreviewComponent, canActivate:[AuthGuard]},

  { path: 'movienews', component: NewsComponent},
  { path: 'newsdetail/:id', component: DetailnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
