import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import {Menu,CompactSidebarIconService } from '../../service/compact-sidebar-icon.service'

@Component({
  selector: 'app-compact-sidebar-icons',
  templateUrl: './compact-sidebar-icons.component.html',
  styleUrls: ['./compact-sidebar-icons.component.scss']
})
export class CompactSidebarIconsComponent implements OnInit {
  menuItems: Menu[];

  constructor(private router: Router, public sidebarIcon: CompactSidebarIconService) {
    this.sidebarIcon.items.subscribe(menuItems => {
      this.menuItems = menuItems
    })
  }

   // Active Nave state
   setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem != item)
        menuItem.active = false
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true
            submenuItems.active = true
          }
        })
      }
    })
  }

    // Click Toggle menu
    toggletNavActive(item) {
      if (!item.active) {
        this.menuItems.forEach(a => {
          if (this.menuItems.includes(item))
            a.active = false
          if (!a.children) return false
          a.children.forEach(b => {
            if (a.children.includes(item)) {
              b.active = false
            }
          })
        });
      }
      item.active = !item.active
    }
  
  ngOnInit() {
  }

}