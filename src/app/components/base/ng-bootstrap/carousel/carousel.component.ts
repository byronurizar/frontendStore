
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class NgbCarouselComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['assets/images/1.png','assets/images/2.png','assets/images/3.png','assets/images/4.png','assets/images/5.png','assets/images/6.png']

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
      // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }


}
