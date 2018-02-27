import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subchapter } from '../../../models/subchapter.model';
import { SubchapterService } from '../../../services/subchapter.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {
  subchapters: Array<Subchapter>;

  constructor(private subchapterService: SubchapterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.subchapterService.getSubchapters(params['id']).subscribe(result => {
          this.subchapters = result;
        });
      }
    );
  }

}
