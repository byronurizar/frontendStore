import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/shared/service/nav.service';

@Component({
  selector: 'compact-sidebar',
  templateUrl: './compact-sidebar.component.html',
  styleUrls: ['./compact-sidebar.component.scss']
})
export class CompactSidebarComponent implements OnInit {
  public toggle;
  openToggle: boolean;
  constructor(public navService : NavService) { 
    if (this.navService.openToggle == true) {
      this.openToggle = !this.openToggle;
      this.toggle = this.openToggle;
    }
  }
  

  receiveToggle($event) {
    this.openToggle = $event
    this.toggle = this.openToggle;
  }

  ngOnInit() { }

}
