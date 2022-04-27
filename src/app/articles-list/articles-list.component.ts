import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Articles} from '../typedefs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  @Input() articles!: Articles[];
  @Input() selectedProgram: Articles | null = null;
  @Output() setSelectedEvent = new EventEmitter<Articles>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(article: Articles) {
    this.setSelectedEvent.emit(article);
  }
}
