import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NevBarComponent } from './nev-bar/nev-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';
import {MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftSideComponent } from './left-side/left-side.component';


@NgModule({
  declarations: [
    AppComponent,
    NevBarComponent,
    RightBarComponent,
    LeftSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
