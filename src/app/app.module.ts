import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppCockpitComponent } from './app-cockpit/app-cockpit.component';
import { AppListingComponent } from './app-listing/app-listing.component';
import { AppListService } from './service/app-list.service';

@NgModule({
  declarations: [
    AppComponent,
    AppCockpitComponent,
    AppListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AppListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
