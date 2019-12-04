import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollableComponent } from './scrollable/scrollable.component';
import { ToastrComponent } from './toastr/toastr.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { RibbonsComponent } from './ribbons/ribbons.component';
import { StepsComponent } from './steps/steps.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { StickyComponent } from './sticky/sticky.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'scrollable',
        component: ScrollableComponent
      },
      {
        path: 'toastr',
        component: ToastrComponent
      },
      {
        path: 'sweetalert',
        component: SweetAlertComponent
      },
      {
        path: 'owl-carousel',
        component: OwlCarouselComponent
      },
      {
        path: 'ribbons',
        component: RibbonsComponent
      },
      {
        path: 'steps',
        component: StepsComponent
      },
      {
        path: 'breadcrumb',
        component: BreadcrumbComponent
      },
      {
        path: 'range-slider',
        component: RangeSliderComponent
      },
      {
        path: 'sticky',
        component: StickyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceRoutingModule { }
