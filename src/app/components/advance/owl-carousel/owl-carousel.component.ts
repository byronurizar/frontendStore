import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss']
})
export class OwlCarouselComponent implements OnInit {

  constructor() { }

  // Carousel Images  
  public carouselImages = [{
    image: 'assets/images/1.png',
  },
  {
    image: 'assets/images/2.png',
  },
  {
    image: 'assets/images/3.png',
  },
  {
    image: 'assets/images/4.png',
  },
  {
    image: 'assets/images/5.png',
  },
  {
    image: 'assets/images/6.png',
  },
  {
    image: 'assets/images/1.png',
  },
  {
    image: 'assets/images/2.png',
  },
  {
    image: 'assets/images/3.png',
  },
  {
    image: 'assets/images/4.png',
  },
  {
    image: 'assets/images/5.png',
  }];

  carouselBasic = {
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

  carouselResponsive = {
    loop: true,
    margin: 10,
    items: 5,
    nav: false,
    responsive: {
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }

  carouselCenter = {
    center: true,
    items: 5,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }

  carouselMerge = {
    items: 5,
    loop: true,
    margin: 10,
    merge: true,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  carouselAutoWidth = {
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 5,
    nav: false
  }

  carouselNavigations = {
    items: 5,
    loop: false,
    center: true,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  carouselEvents = {
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  carouselStagePadding = {
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  carouselRTL = {
    rtl: true,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  carouselLazyload = {
    items: 5,
    lazyLoad: true,
    loop: true,
    margin: 5,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  carouselAnimate = {
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 5,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  carouselAutoPlay = {
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      576: {
        items: 1,
        mergeFit: true
      },
      768: {
        items: 2,
        mergeFit: true
      },
      992: {
        items: 3,
        mergeFit: true

      }
    }
  }

  carouselAutoHeight = {
    items: 4,
    margin: 10,
    autoHeight: true,
    nav: false
  }

  ngOnInit() {
  }
}
