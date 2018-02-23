import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/chapters',
    pathMatch: 'full'
  },
  {
    path: 'chapters',
    component: AppComponent
    // loadChildren: 'app/components/chapters/chapters.module#ChaptersModule'
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}