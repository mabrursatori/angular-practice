import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {ImageUploaderComponent} from './admin/image-uploader/image-uploader.component'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ImageCropperModule } from 'ngx-image-cropper';

//material design
import { MaterialDesign } from './material/material';
import { ForgotComponent } from './auth/forgot/forgot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
