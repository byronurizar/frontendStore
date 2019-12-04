import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

@NgModule({
  declarations: [BlogDetailsComponent, BlogSingleComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
