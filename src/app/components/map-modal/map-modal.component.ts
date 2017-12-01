import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MapOptions } from 'angular2-baidu-map';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.css']
})
export class MapModalComponent implements OnInit {
  @Input() toilet: any;
  options: MapOptions;
  center: [121.506191, 31.245554];
  mallId: any;
  levelId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.mallId = this.route.snapshot.paramMap.get('mallId');
    this.levelId = this.route.snapshot.paramMap.get('levelId');
  }

  backToList() {
    this.router.navigate(['/malls', this.mallId, 'levels', this.levelId]);
  }

}
