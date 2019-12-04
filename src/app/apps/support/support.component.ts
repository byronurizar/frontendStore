import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { supportDB } from '../../shared/data/table/support-ticket';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SupportComponent implements OnInit {

  public support = []

  constructor() {
    this.support = supportDB.ticket;
  }
  public settings = {
    columns: {
      img: {
        title: 'Image',
        type: 'html',
      },
      position: {
        title: 'Position'
      },
      salary: {
        title: 'Salary',
        type: 'html',
      },
      office: {
        title: 'Office'
      },
      skill: {
        title: 'Skill',
        type: 'html',
      },
      extn: {
        title: 'Extn'
      },
      email: {
        title: 'Email'
      }
    },
  };
  
  ngOnInit() { }

}
