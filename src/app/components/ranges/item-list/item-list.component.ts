import { Component, OnInit } from '@angular/core';
import { RangeModel } from '../../../models/range.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  range: RangeModel;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.range = this.route.snapshot.data.range;
      }
    });

    this.range = this.route.snapshot.data.range;
  }

}
