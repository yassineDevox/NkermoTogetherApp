import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app.routes";
import { AppComponent } from './app.component';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';
import { HomeComponent } from './home/home.component';

const agoraConfig: AgoraConfig = { AppID: 'APP-ID-HERE' };
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularAgoraRtcModule.forRoot(agoraConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }