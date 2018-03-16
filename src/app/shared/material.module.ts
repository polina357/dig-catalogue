import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
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
