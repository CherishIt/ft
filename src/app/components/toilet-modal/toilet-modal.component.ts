import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-toilet-modal',
  templateUrl: './toilet-modal.component.html',
  styleUrls: ['./toilet-modal.component.css']
})
export class ToiletModalComponent implements OnInit {
  @Input() toilet;
  mapModal = 'mapModal';
  img: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public modalService: ModalService,
    public imageService: ImageService,
  ) { }

  ngOnInit() {
    this.img = this.imageService.getRandomImage();
  }

  viewMap() {
    // this.modalService.open(this.mapModal);
    this.router.navigate(['toilets/12/map'], { relativeTo: this.route} );
  }

}
