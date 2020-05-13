import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

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
    }]
    carouselMerge = {
      items: 4,
      margin: 10,
      autoHeight: true,
      nav: false
    }
  ngOnInit() {
  }

}
