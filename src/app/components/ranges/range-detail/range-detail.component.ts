import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Item } from '../../../models/item.model';
import { ItemService } from '../../../services/item.service';
import { RangeModel } from '../../../models/range.model';

@Component({
  selector: 'app-range-detail',
  templateUrl: './range-detail.component.html',
  styleUrls: ['./range-detail.component.css']
})
export class RangeDetailComponent implements OnInit, OnDestroy {
  range: RangeModel;
  items: Array<Item>;
  sub: Subscription;

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.range = this.route.snapshot.data.range;
        this.itemService.getItems(this.range.id).subscribe(result => {
          this.items = result;
        });
      }
    });
    this.range = this.route.snapshot.data.range;
    this.itemService.getItems(this.range.id).subscribe(result => {
      this.items = result;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
