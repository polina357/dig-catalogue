import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const modules = [
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule
];

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule { }
