import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss']
})
export class ChatSidebarComponent implements OnInit {
  public open: boolean = false;
  constructor() { }

  openActivity() {
    this.open = !this.open;
  }

  ngOnInit() {
  }

}
