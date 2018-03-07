import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import './shared/rxjs-imports';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { ChaptersModule } from './components/chapters/chapters.module';
import { SubchaptersModule } from './components/subchapters/subchapters.module';
import { SectionsModule } from './components/sections/sections.module';
import { RangesModule } from './components/ranges/ranges.module';
import { LoaderComponent } from './shared/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginComponent
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
    FormsModule,
    ReactiveFormsModule,
    RangesModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
