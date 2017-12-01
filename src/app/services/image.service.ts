import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor(
  ) { }

  getRandomNumber(base: number, offset: number) {
    return base + Math.ceil(Math.random() * offset);
  }

  getRandomImage(): string {
    return `https://picsum.photos/${this.getRandomNumber(390, 20)}/${this.getRandomNumber(290, 20)}`;
  }

}
