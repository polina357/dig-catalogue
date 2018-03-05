import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { CardComponent } from './card/card.component';

const modules = [
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
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
