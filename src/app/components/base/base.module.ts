import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BaseRoutingModule } from './base-routing.module';

// ui-elements components
import { GridComponent } from './ul-elements/grid/grid.component';
import { HelperClassesComponent } from './ul-elements/helper-classes/helper-classes.component';
import { ListComponent } from './ul-elements/list/list.component';
import { NavsComponent } from './ul-elements/navs/navs.component';
import { ProgressbarComponent } from './ul-elements/progressbar/progressbar.component';
import { ShadowComponent } from './ul-elements/shadow/shadow.component';
import { SpinnersComponent } from './ul-elements/spinners/spinners.component';
import { StateColorComponent } from './ul-elements/state-color/state-color.component';
import { TagNPillsComponent } from './ul-elements/tag-n-pills/tag-n-pills.component';
import { TypographyComponent } from './ul-elements/typography/typography.component';
// Ng-bootstrap components
import { NgbAccordionComponent } from './ng-bootstrap/accordion/accordion.component';
import { NgbAlertComponent } from './ng-bootstrap/alert/alert.component';
import { NgbButtonsComponent } from './ng-bootstrap/buttons/buttons.component';
import { NgbCarouselComponent } from './ng-bootstrap/carousel/carousel.component';
import { NgbCollapseComponent } from './ng-bootstrap/collapse/collapse.component';
import { NgbDatepickerComponent } from './ng-bootstrap/datepicker/datepicker.component';
import { NgbDropdownComponent } from './ng-bootstrap/dropdown/dropdown.component';
import { NgbModalComponent, NgbdModalContent, NgbdModal1Content, NgbdModal2Content } from './ng-bootstrap/modal/modal.component';
import { NgbPaginationComponent } from './ng-bootstrap/pagination/pagination.component';
import { NgbPopoverComponent } from './ng-bootstrap/popover/popover.component';
import { NgbProgressbarComponent } from './ng-bootstrap/progressbar/progressbar.component';
import { NgbRatingComponent } from './ng-bootstrap/rating/rating.component';
import { NgbTabsetComponent } from './ng-bootstrap/tabset/tabset.component';
import { NgbTimepickerComponent } from './ng-bootstrap/timepicker/timepicker.component';
import { NgbTooltipComponent } from './ng-bootstrap/tooltip/tooltip.component';
import { NgbTypeaheadComponent } from './ng-bootstrap/typeahead/typeahead.component';


@NgModule({
  declarations: [
    GridComponent, 
    HelperClassesComponent, 
    ListComponent,
    NavsComponent, 
    ProgressbarComponent, 
    ShadowComponent, 
    SpinnersComponent, 
    StateColorComponent, 
    TagNPillsComponent, 
    TypographyComponent,
    NgbAccordionComponent, 
    NgbAlertComponent, 
    NgbButtonsComponent, 
    NgbCarouselComponent, 
    NgbCollapseComponent, 
    NgbDatepickerComponent, 
    NgbDropdownComponent, 
    NgbModalComponent, 
    NgbdModalContent, 
    NgbdModal1Content, 
    NgbdModal2Content, 
    NgbPaginationComponent, 
    NgbPopoverComponent, 
    NgbProgressbarComponent, 
    NgbRatingComponent, 
    NgbTabsetComponent, 
    NgbTimepickerComponent, 
    NgbTooltipComponent, 
    NgbTypeaheadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BaseRoutingModule
  ],
  entryComponents:[NgbdModalContent, NgbdModal1Content, NgbdModal2Content]
})
export class BaseModule { }
