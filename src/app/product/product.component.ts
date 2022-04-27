import { Component, Input, OnInit } from '@angular/core';
import { Category, Product } from '../typedefs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  completed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

   exersizeColorClass(category: Category) {
    switch (category) {
      case Category.Eye:
      default:
        return 'Eye';
      case Category.Face:
        return 'Face';
      case Category.Care:
        return 'Care';
      case Category.Gel:
        return 'Gel';
      case Category.Clean:
        return 'Clean';

    }
  }
}
