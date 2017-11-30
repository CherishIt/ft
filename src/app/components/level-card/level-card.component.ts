import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level-card',
  templateUrl: './level-card.component.html',
  styleUrls: ['./level-card.component.css'],
})
export class LevelCardComponent implements OnInit {
  @Input() level: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
  }

  handleClick(level) {
    this.router.navigate(['levels', level.id], {
      relativeTo: this.route,
    });
  }

}
