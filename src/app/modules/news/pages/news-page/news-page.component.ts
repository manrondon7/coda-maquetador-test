import { Component } from '@angular/core';
import { Article } from 'src/app/entities/article';
import { articlesMockData } from './articles-mock-data';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent {
  languageSelectOtions: string[] = ['Español', 'English', 'Alll languages'];
  courseSelectOtions: string[] = ['[Course_1]', '[Course_2]', '[Course_3]'];
  articles: Article[] = articlesMockData;

  constructor() { }
}
