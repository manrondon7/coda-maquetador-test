import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/entities/testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {
  @Input() testimonial?: Testimonial;

  constructor() { }

  ngOnInit(): void {
  }

}
