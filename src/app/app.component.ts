import { Component, OnInit } from '@angular/core';
import { SidebarService } from './shared/sidebar/sidebar.service';
import { ChapterListComponent } from './components/chapters/chapter-list/chapter-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private sidebarService: SidebarService
  ) {

  }
  ngOnInit() {
  }
}
