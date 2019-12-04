import { Component, OnInit } from '@angular/core';
// import { NavService , Menu } from '../../service/nav.service';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { CompactSidebarService ,Menu} from '../../service/compact-sidebar.service';

@Component({
  selector: 'app-compact-sidebar',
  templateUrl: './compact-sidebar.component.html',
  styleUrls: ['./compact-sidebar.component.scss']
})
export class CompactSidebarComponent implements OnInit {

  public menuItems: Menu[];
  

  constructor(private router: Router, public sidebarService: CompactSidebarService) {
    this.sidebarService.items.subscribe(menuItems => {
      this.menuItems = menuItems
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url)
              this.setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
              if (subItems.path === event.url)
                this.setNavActive(subItems)
              if (!subItems.children) return false
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url)
                  this.setNavActive(subSubItems)
              })
            })
          })
        }
      })
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
  ngOnInit() {
  }

}