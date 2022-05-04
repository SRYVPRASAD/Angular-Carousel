import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [],
})
export class CarouselComponent implements OnInit {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  selectedIndex = 0;
  constructor() {}

  ngOnInit(): void {
    this.autoSlideImages();
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  autoSlideImages(): void {
    setInterval(() => {
      this.selectedIndex < this.images.length - 1
        ? this.selectedIndex++
        : (this.selectedIndex = 0);
    }, 3000);
  }
}
