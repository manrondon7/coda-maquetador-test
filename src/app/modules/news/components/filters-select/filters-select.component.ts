import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-select',
  templateUrl: './filters-select.component.html',
  styleUrls: ['./filters-select.component.scss'],
})
export class FiltersSelectComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() placeholder: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
