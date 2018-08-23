import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { DetailsComponent } from './products/details/details.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllComponent } from './reviews/all/all.component';
import { ReviewdetailsComponent } from './reviews/reviewdetail/reviewdetail.component';

@NgModule({
  declarations: [

    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    BrandComponent,
    CategoryComponent,
    DetailsComponent,
    AuthorComponent,
    AllComponent,
    ReviewdetailsComponent

  ],

  imports: [

    BrowserModule,
    AppRoutingModule

  ],

  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
