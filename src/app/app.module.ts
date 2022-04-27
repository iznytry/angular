import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppContainerComponent } from './app-container/app-container.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { SelectedArticleComponent } from './selected-article/selected-article.component';
import { ProductComponent } from './product/product.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleComponent } from './article/article';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    HeaderComponent,
    CategoryComponent,
    SelectedArticleComponent,
    ProductComponent,
    ArticlesListComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
