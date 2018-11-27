//buitlin imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

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
    CategorydataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
