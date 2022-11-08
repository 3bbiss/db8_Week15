import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialpostsComponent } from './socialposts/socialposts.component';
import { SocialpostComponent } from './socialpost/socialpost.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialpostsComponent,
    SocialpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
