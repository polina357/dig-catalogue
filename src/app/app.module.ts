import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';

import { AppRoutingModule } from './app-routing.module';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { ChapterService } from './services/chapter.service';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { SubchapterService } from './services/subchapter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    VirtualScrollModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule
  ],
  providers: [ChapterService, SubchapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
