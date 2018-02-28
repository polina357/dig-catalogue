import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'rxjs/Rx';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { ChaptersModule } from './components/chapters/chapters.module';
import { SubchaptersModule } from './components/subchapters/subchapters.module';
import { SectionsModule } from './components/sections/sections.module';
import { RangesModule } from './components/ranges/ranges.module';

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
    SidebarModule,
    ChaptersModule,
    SubchaptersModule,
    SectionsModule,
    RangesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
