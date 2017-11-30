import { Component, Input, OnInit } from '@angular/core';
import { MapOptions } from 'angular2-baidu-map';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css']
})
export class MapModalComponent implements OnInit {
  @Input() toilet: any;
  options: MapOptions;

  constructor() {
    this.options = {
      centerAndZoom: {
        lng: 121.506191,
        lat: 31.245554,
        zoom: 15
      },
    };
  }

  ngOnInit() {
  }

}
