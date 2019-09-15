import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routes";
import { AppComponent } from './app.component';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './home/registration/registration.component';
import { SearchComponent } from './home/search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { HeaderUiComponent } from './header-ui/header-ui.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { PublicationComponent } from './pages/publication/publication.component';
 


const agoraConfig: AgoraConfig = { AppID: 'APP-ID-HERE' };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    SearchComponent,
    HeaderUiComponent,
    ContactUsComponent,
    ProfilComponent,
    PublicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularAgoraRtcModule.forRoot(agoraConfig),
    ReactiveFormsModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
