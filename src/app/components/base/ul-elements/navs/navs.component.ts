import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.scss']
})
export class NavsComponent implements OnInit {
  public show: boolean = false;
  constructor() { }

  open() {
    this.show = !this.show
  }

  ngOnInit() { }

}
