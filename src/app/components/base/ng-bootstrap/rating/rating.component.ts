import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class NgbRatingComponent implements OnInit {

  public currentRate = 6;
  public selected = 0;
  public hovered = 0;
  public readonly = false;
  public heartRate = 5;

  constructor() { }

  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  ngOnInit() {
  }

}
