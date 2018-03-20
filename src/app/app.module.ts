import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import './shared/rxjs-imports';

import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { AngularFireModule} from 'angularfire2';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { ChaptersModule } from './components/chapters/chapters.module';
import { SubchaptersModule } from './components/subchapters/subchapters.module';
import { SectionsModule } from './components/sections/sections.module';
import { RangesModule } from './components/ranges/ranges.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    VirtualScrollModule,
    BrowserAnimationsModule,
    ChaptersModule,
    SubchaptersModule,
    SectionsModule,
    FormsModule,
    ReactiveFormsModule,
    RangesModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
