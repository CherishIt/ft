import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level-card',
  templateUrl: './level-card.component.html',
  styleUrls: ['./level-card.component.css'],
})
export class LevelCardComponent implements OnInit {
  @Input() level: any;
  total: any;
  maleAvail: any;
  femaleAvail: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
    console.log(this.level);
    this.total = this.level.toilets.length;
    this.maleAvail = this.getAvail('male');
    this.femaleAvail = this.getAvail('female');
  }

  getAvail(gender: 'male' | 'female') {
    // return this.level.toilets.position[gender].closets.reduce((acc, curr) =>
    //   acc + curr.available ? 1 : 0,
    //   0,
    // );
    return this.level.toilets.reduce((acc, curr) =>
      acc + curr.position[gender].closets.reduce((a, c) =>
        a + c.available ? 1 : 0,
        0,
      ),
      0,
    );
  }

  handleClick(level) {
    this.router.navigate(['levels', level.name], {
      relativeTo: this.route,
    });
  }

}
