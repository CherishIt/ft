import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MallService } from '../../services/mall.service';

@Component({
  selector: 'app-mall-page',
  templateUrl: './mall-page.component.html',
  styleUrls: ['./mall-page.component.css']
})
export class MallPageComponent implements OnInit {
  mallId: any;
  mall: any;
  levels: any[];

  constructor(
    private route: ActivatedRoute,
    private mallService: MallService,
  ) { }

  getLevels() {
    this.mallService.getLevels(this.mallId)
      .subscribe(
        data => {
          this.levels = data;
        },
        err => {
          console.log(err);
        },
      );
  }

  ngOnInit() {
    this.mallId = this.route.snapshot.paramMap.get('mallId');
    this.mall = {
      name: '凯利大厦',
      id: this.mallId,
      description: '这是一个有很多层的大厦。',
    };
    this.getLevels();
  }

}
