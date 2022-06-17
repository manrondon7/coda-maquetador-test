import { Component } from '@angular/core';
import { Testimonial } from 'src/app/entities/testimonial';
import { testimonialsMockData } from './testimonials-mock-data';

@Component({
  selector: 'app-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent {
  testimonials: Testimonial[] = testimonialsMockData;

  constructor() { }
}
