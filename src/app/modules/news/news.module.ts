import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';

// Pages
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

// Components
import { ArticleCardComponent } from './components/article-card/article-card.component';

// Modals
import { ExampleModalComponent } from './modal/example-modal/example-modal.component';
import { NewsletterModalComponent } from './modal/newsletter-modal/newsletter-modal.component';

// Material
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TestimonialsModule } from '../testimonials/testimonials.module';
import { FiltersSearchComponent } from './components/filters-search/filters-search.component';
import { FiltersSelectComponent } from './components/filters-select/filters-select.component';



@NgModule({
  declarations: [
    NewsPageComponent,
    ArticlePageComponent,
    ArticleCardComponent,
    ExampleModalComponent,
    NewsletterModalComponent,
    FiltersSelectComponent,
    FiltersSearchComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    TestimonialsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    NewsletterModalComponent
  ]
})
export class NewsModule { }
