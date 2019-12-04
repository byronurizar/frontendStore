import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { Ng5SliderModule } from 'ng5-slider';

import { AdvanceRoutingModule } from './advance-routing.module';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { ToastrComponent } from './toastr/toastr.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { StepsComponent } from './steps/steps.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { StickyComponent } from './sticky/sticky.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: false,
  wheelPropagation: false
};

@NgModule({
  declarations: [ScrollableComponent,ToastrComponent, SweetAlertComponent, OwlCarouselComponent, RibbonsComponent, StepsComponent, BreadcrumbComponent, RangeSliderComponent, StickyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    Ng5SliderModule,
    AdvanceRoutingModule,
    PerfectScrollbarModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
})
export class AdvanceModule { }
