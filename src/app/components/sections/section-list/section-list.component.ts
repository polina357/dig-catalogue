import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Section } from '../../../models/section.model';
import { slideInOutAnimation } from '../../../shared/animation';
import { SectionService } from '../../../services/section.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css'],
  animations: [slideInOutAnimation]
})
export class SectionListComponent implements OnInit {
  subchapter: string;
  sections: Array<Section>;

  constructor(private router: Router,
    private route: ActivatedRoute, private sectionService: SectionService) { }

  ngOnInit() {
  }
}
