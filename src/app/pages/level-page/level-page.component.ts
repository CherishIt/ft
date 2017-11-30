import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-level-page',
  templateUrl: './level-page.component.html',
  styleUrls: ['./level-page.component.css']
})
export class LevelPageComponent implements OnInit {
  mallId: any;
  levelId: any;
  toilets: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private levelService: LevelService,
  ) {
    this.mallId = route.snapshot.paramMap.get('mall_id');
    this.levelId = route.snapshot.paramMap.get('level_id');
  }

  getToilets() {
    this.levelService.getToilets(this.mallId, this.levelId)
      .subscribe(
        data => this.toilets = data.sort((a, b) =>
          (a.position.male.available + a.position.female.available) -
          (b.position.male.available + a.position.female.available),
        ),
        err => console.log(err),
      );
  }

  gotoMallPage() {
    this.router.navigate([]);
  }

  ngOnInit() {
    this.getToilets();
  }

}
