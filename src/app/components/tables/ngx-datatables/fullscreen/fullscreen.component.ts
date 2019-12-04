import { Component } from '@angular/core';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent {

  rows = [];
  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/tables/employee.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

}
