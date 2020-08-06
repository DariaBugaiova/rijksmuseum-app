import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArtObjectService } from './core/servises/art-object.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/art-objects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     BrowserAnimationsModule,
     DashboardModule,
     SharedModule,
     CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
