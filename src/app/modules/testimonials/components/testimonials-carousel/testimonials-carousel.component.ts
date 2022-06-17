import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Testimonial } from 'src/app/entities/testimonial';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsCarouselComponent{
  @Input() testimonials: Testimonial[] = [];

  carouselOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      599.98: {
        items: 2
      },
      960: {
        items: 3
      }
    },
    nav: true,
    autoHeight: false,
    dotsEach: 1
  }

  constructor() { }
}
