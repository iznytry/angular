import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../typedefs';

const categoriesClassNames = {
  [Category.Eye]: 'Eye',
  [Category.Face]: 'Face',
  [Category.Care]: 'Care',
  [Category.Gel]: 'Gel',
  [Category.Clean]: 'Clean',
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category!: Category;
  @Input() withLabel: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  iconByCategory(category: Category) {
    switch (category) {
      case Category.Eye:
        return "pictures/eye.svg";
      case Category.Face:
        return "pictures/stonks.svg";
      case Category.Care:
        return "assets/grow.svg";
      case Category.Clean:
      default:
        return "assets/cardio.svg";
    }
  };

  classNameByCategory(category: Category) {
    return categoriesClassNames[category];
  }

  labelByCategory(category: Category) {
    switch (category) {
      case Category.Eye:
        return 'Глаза';
      case Category.Face:
        return 'Лицо';
      case Category.WeightLoss:
        return 'Потеря веса';
      case Category.Cardio:
      default:
        return 'Кардио';
    }
  }

}
