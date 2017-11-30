import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toilet-card',
  templateUrl: './toilet-card.component.html',
  styleUrls: ['./toilet-card.component.css']
})
export class ToiletCardComponent implements OnInit {
  @Input() toilet: any;

  constructor() { }

  ngOnInit() {
  }

}
