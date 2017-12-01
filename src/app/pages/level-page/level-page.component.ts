import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LevelService } from '../../services/level.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-level-page',
  templateUrl: './level-page.component.html',
  styleUrls: ['./level-page.component.css']
})
export class LevelPageComponent implements OnInit {
  mallId: any;
  levelId: any;
  levelInfo: any;
  toilets: any[];
  selectedToilet: any;
  toiletModal = 'toiletModal';
  noneAvailModal = 'noneAvailModal';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private levelService: LevelService,
    public modalService: ModalService,
  ) {
    this.mallId = route.snapshot.paramMap.get('mallId');
    this.levelId = route.snapshot.paramMap.get('levelId');
  }

  getToilets(): void {
    this.levelService.getToilets(this.mallId, this.levelId)
      .subscribe(
        data => {
          this.levelInfo = data;
          console.log(data);
          this.toilets = data.toilets
            .map(t => {
              const male = t.position.male;
              const female = t.position.female;
              male.total = male.closets.length;
              female.total = male.closets.length;
              male.available = male.closets.reduce((acc, curr) =>
                acc + curr.available ? 1 : 0,
                0,
              );
              female.available = male.closets.reduce((acc, curr) =>
                acc + curr.available ? 1 : 0,
                0,
              );
              return t;
            })
            .sort((a, b) =>
              (this.getMaleAvail(b) + this.getFemaleAvail(b)) -
              (this.getMaleAvail(a) + this.getFemaleAvail(a)),
            );
        },
        err => console.log(err),
      );
  }

  getMaleAvail(toilet): any {
    return toilet.position.male.available;
  }

  getFemaleAvail(toilet): any {
    return toilet.position.female.available;
  }

  findAvailToilet(availFn): void {
    let result = null;
    let maxAvail = 0;
    for (const toilet of this.toilets) {
      const currAvail = availFn(toilet);
      if (currAvail > maxAvail) {
        maxAvail = currAvail;
        result = toilet;
      }
    }
    if (result) {
      this.selectedToilet = result;
      this.modalService.open(this.toiletModal);
    } else {
      this.modalService.open(this.noneAvailModal);
    }
  }

  // findAvailMaleToilet(): void {
  // }

  // findAvailFemaleToilet(): void {
  //   let result = null;
  //   let maxAvail = 0;
  //   for (const toilet of this.toilets) {
  //     const currAvail = this.getFemaleAvail(toilet);
  //     if (currAvail > maxAvail) {
  //       maxAvail = currAvail;
  //       result = toilet;
  //     }
  //   }

  //   if (result) {
  //     this.selectedToilet = result;
  //     this.modalService.open(this.toiletModal);
  //   } else {
  //     this.modalService.open(this.noneAvailModal);
  //   }
  // }

  selectToilet(toilet): void {
    this.selectedToilet = toilet;
    console.log('slct', toilet, this.toiletModal);
    this.modalService.open(this.toiletModal);
  }

  backToMallPage() {
    this.router.navigate(['/malls', this.mallId]);
  }

  ngOnInit() {
    this.getToilets();
  }

}
