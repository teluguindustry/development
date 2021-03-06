//buitlin imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgImageSliderModule } from 'ng-image-slider';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { SingupComponent } from './admin/singup/singup.component';
import { UserprofileComponent } from './admin/userprofile/userprofile.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserService } from './shared/user.service';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { LeftnavComponent } from './admin/leftnav/leftnav.component';
import { LogoutComponent } from './admin/logout/logout.component';
import { CelebritydataComponent } from './admin/celebrityprofile/celebritydata/celebritydata.component';
import { CelebrityaddComponent } from './admin/celebrityprofile/celebrityadd/celebrityadd.component';
import { CelebrityeditComponent } from './admin/celebrityprofile/celebrityedit/celebrityedit.component';
import { AddcategoryComponent } from './admin/profilecategory/addcategory/addcategory.component';
import { EditcategoryComponent } from './admin/profilecategory/editcategory/editcategory.component';
import { CategorydataComponent } from './admin/profilecategory/categorydata/categorydata.component';
import { MoviesdataComponent } from './admin/movies/moviesdata/moviesdata.component';
import { MoviesaddComponent } from './admin/movies/moviesadd/moviesadd.component';
import { MovieseditComponent } from './admin/movies/moviesedit/moviesedit.component';
import { NewsdataComponent } from './admin/news/newsdata/newsdata.component';
import { NewseditComponent } from './admin/news/newsedit/newsedit.component';
import { NewsaddComponent } from './admin/news/newsadd/newsadd.component';
import { GallerydataComponent } from './admin/gallery/gallerydata/gallerydata.component';
import { GalleryaddComponent } from './admin/gallery/galleryadd/galleryadd.component';
import { GalleryeditComponent } from './admin/gallery/galleryedit/galleryedit.component';
import { NewsComponent } from "./website/news/news/news.component";
import { DetailnewsComponent } from './website/news/detailnews/detailnews.component';
import { WebsiteheaderComponent } from './website/websiteheader/websiteheader.component';
import { WebsitefooterComponent } from './website/websitefooter/websitefooter.component';
import { WebsiterightbarComponent } from './website/websiterightbar/websiterightbar.component';
import { SidebarnewslistComponent } from './website/news/sidebarnewslist/sidebarnewslist.component';
import { SidebargalleryComponent } from './website/gallery/sidebargallery/sidebargallery.component';
import { NowplayingaddComponent } from './admin/nowplaying/nowplayingadd/nowplayingadd.component';
import { NowplayingeditComponent } from './admin/nowplaying/nowplayingedit/nowplayingedit.component';
import { NowplayingdataComponent } from './admin/nowplaying/nowplayingdata/nowplayingdata.component';
import { UpcomingaddComponent } from './admin/upcoming/upcomingadd/upcomingadd.component';
import { UpcomingdataComponent } from './admin/upcoming/upcomingdata/upcomingdata.component';
import { UpcomingeditComponent } from './admin/upcoming/upcomingedit/upcomingedit.component';
import { AddreviewComponent } from './admin/moviereviews/addreview/addreview.component';
import { ReviewdataComponent } from './admin/moviereviews/reviewdata/reviewdata.component';
import { EditreviewComponent } from './admin/moviereviews/editreview/editreview.component';
import { NowplayingComponent } from './website/nowplaying/nowplaying.component';
import { UpcomingComponent } from './website/upcoming/upcoming.component';
import { MoviereviewsComponent } from './website/moviereviews/moviereviews.component';
import { MoviedetailsComponent } from './website/moviedetails/moviedetails.component';
import { PramotionsdataComponent } from './admin/pramotions/pramotionsdata/pramotionsdata.component';
import { AddpramotionsComponent } from './admin/pramotions/addpramotions/addpramotions.component';
import { EditpramotionsComponent } from './admin/pramotions/editpramotions/editpramotions.component';
import { PramotionsComponent } from './website/pramotions/pramotions/pramotions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    UserprofileComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LeftnavComponent,
    LogoutComponent,
    CelebritydataComponent,
    CelebrityaddComponent,
    CelebrityeditComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    CategorydataComponent,
    MoviesdataComponent,
    MoviesaddComponent,
    MovieseditComponent,
    NewsdataComponent,
    NewseditComponent,
    NewsaddComponent,
    GallerydataComponent,
    GalleryaddComponent,
    GalleryeditComponent,
    NewsComponent,
    DetailnewsComponent,
    WebsiteheaderComponent,
    WebsitefooterComponent,
    WebsiterightbarComponent,
    SidebarnewslistComponent,
    SidebargalleryComponent,
    NowplayingaddComponent,
    NowplayingeditComponent,
    NowplayingdataComponent,
    UpcomingaddComponent,
    UpcomingdataComponent,
    UpcomingeditComponent,
    AddreviewComponent,
    ReviewdataComponent,
    EditreviewComponent,
    NowplayingComponent,
    UpcomingComponent,
    MoviereviewsComponent,
    MoviedetailsComponent,
    PramotionsdataComponent,
    AddpramotionsComponent,
    EditpramotionsComponent,
    PramotionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgImageSliderModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
