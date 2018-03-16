import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() category: any;
  @Input() link: RouterLink;
  src: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

  constructor() { }

  ngOnInit() {
  }

}
