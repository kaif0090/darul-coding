import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    AppComponent,
  
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
     progressBar: true,
     newestOnTop: true,
     timeOut: 2000,
     autoDismiss: true,
     preventDuplicates: true,
     progressAnimation: 'increasing',
   }),
   NgxUiLoaderModule,
   NgxUiLoaderModule.forRoot({
    fgsType: 'square-jelly-box', // animation type
  fgsColor: '#ff4081',          // foreground spinner color
  fgsSize: 200,                 // spinner size
  blur: 20,                      // background blur
  gap: 24,                      // gap between multiple loaders
  overlayColor: 'rgba(0, 0, 0, 0.808)', // background color
  pbDirection: 'ltr',           // progress bar direction
  pbThickness: 5,               // progress bar thickness
  hasProgressBar: true,         // show progress bar
  text: 'Loading...',           // text under loader
  textColor: '#ffffff',         // text color
  textPosition: 'center-center',// text position
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
