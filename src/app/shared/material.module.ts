import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

const modules = [
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatProgressSpinnerModule,
  RouterModule
];

@NgModule({
  imports: modules,
  exports: [modules, CardComponent],
  declarations: [
    CardComponent
  ]
})
export class MaterialModule { }
