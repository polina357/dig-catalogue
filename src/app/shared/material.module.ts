import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { SidebarDirective } from './sidebar.directive';

const modules = [
    MatButtonModule,
    MatSidenavModule,
    MatCardModule
]

@NgModule({
    imports: modules,
    exports: modules,
    declarations: [SidebarDirective],
})
export class MaterialModule { }
