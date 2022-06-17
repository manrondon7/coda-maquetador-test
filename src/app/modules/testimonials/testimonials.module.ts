import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { TestimonialsRoutingModule } from './testimonials-routing.module';

// Pages
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';

// Components
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';

// Modals

// Menus
import { ExampleMenuComponent } from './menus/example-menu/example-menu.component';
import { TestimonialsCarouselComponent } from './components/testimonials-carousel/testimonials-carousel.component';

@NgModule({
  declarations: [
    TestimonialCardComponent,
    TestimonialsPageComponent,
    ExampleMenuComponent,
    TestimonialsCarouselComponent,
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    CarouselModule
  ],
  exports: [
    TestimonialsPageComponent
  ]
})
export class TestimonialsModule { }
