import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ResolveStart, ResolveEnd, NavigationCancel } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  displayStyle = 'none';
  sub: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof ResolveStart) {
        console.log('resolve start');
        this.displayStyle = 'block';
      } else if (event instanceof ResolveEnd) {
        console.log('resolve end');
        this.displayStyle = 'none';
      }
    });
    console.log(this.sub);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
