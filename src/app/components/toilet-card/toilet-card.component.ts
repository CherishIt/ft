import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-toilet-card',
  templateUrl: './toilet-card.component.html',
  styleUrls: ['./toilet-card.component.css']
})
export class ToiletCardComponent implements OnInit {
  @Input() toilet: any;
  img: string;

  constructor(
    public imageService: ImageService,
  ) { }

  ngOnInit() {
    console.log(this.toilet);
    this.img = this.imageService.getRandomImage();
  }

}
