import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articles } from '../typedefs';

@Component({
  selector: 'app-selected-article',
  templateUrl: './selected-article.component.html',
  styleUrls: ['./selected-article.component.css']
})
export class SelectedArticleComponent implements OnInit {

  @Input() selectedArticle!: Articles;
  @Output() closeSelectedEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
