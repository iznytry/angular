import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getCompexityLabel } from '../helpers';
import { Article, ArticleComplexity } from '../typedefs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article!: Article; 
  @Input() isSelected!: boolean;
  @Output() setSelectedEvent = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(article: Article) {
    this.setSelectedEvent.emit(article);
  }

  getComplexityLabel(complexity: ArticleComplexity) {
    return getCompexityLabel(complexity);
  }
}
