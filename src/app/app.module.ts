import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { ChapterService } from './services/chapter.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    VirtualScrollModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ChapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
