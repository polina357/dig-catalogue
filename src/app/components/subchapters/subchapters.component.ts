import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../shared/sidebar/sidebar.service';
import { SubchapterListComponent } from './subchapter-list/subchapter-list.component';

@Component({
  selector: 'app-subchapters',
  templateUrl: './subchapters.component.html',
  styleUrls: ['./subchapters.component.css']
})
export class SubchaptersComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }
  ngOnInit() {
    this.sidebarService.loadComponent(SubchapterListComponent);
  }

}
