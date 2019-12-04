import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  headTitle?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  children?: Menu[];
}

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class CompactSidebarService {

  constructor() { }

  MENUITEMS: Menu[] = [
  {
    path: '/compact-sidebar/dashboard/ecommerce', title: 'Dashboard',active: false, icon: 'icon-desktop', type: 'link'
  },
  {
    title: 'Reports', icon: 'icon-files', type: 'sub',active: false, children: [
      { path: '/compact-sidebar/pages/page', title: 'Order Reports', type: 'link' },          
      { path: '/compact-sidebar/pages/page', title: 'Hr Reports', type: 'link' },         
      { path: '/compact-sidebar/pages/page', title: 'Annual Reports', type: 'link' },         
      { path: '/compact-sidebar/pages/page', title: 'Quaterly Reports', type: 'link' },  
      { path: '/compact-sidebar/pages/page', title: 'Sales Reports', type: 'link' },  
      { path: '/compact-sidebar/pages/page', title: 'Monthly Reports', type: 'link' } 
    ]
  },
  {
    title: 'Management', icon: 'icon-package', type: 'sub' ,active: false, children: [
      { path: '/compact-sidebar/pages/page', title: 'Staff Management', type: 'link' },          
      { path: '/compact-sidebar/pages/page', title: 'Client Management', type: 'link' },         
      { path: '/compact-sidebar/pages/page', title: 'Product Management', type: 'link' }
    ]
  },
  {
    title: 'Feedbacks', icon: 'icon-comment-alt', type: 'sub',active: false, children: [
      { path: '/compact-sidebar/pages/page', title: 'Product Feedbacks', type: 'link' },          
      { path: '/compact-sidebar/pages/page', title: 'Product Ratings', type: 'link' },         
      { path: '/compact-sidebar/pages/page', title: 'Customer Review', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Customer Support', type: 'link' }
    ]
  },
  {
    title: 'Setting', icon: 'icon-settings', type: 'sub',active: false, children: [
      { path: '/compact-sidebar/pages/page', title: 'Profile', type: 'link' },          
      { path: '/compact-sidebar/pages/page', title: 'Accounts', type: 'link' },         
      { path: '/compact-sidebar/pages/page', title: 'Notification', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Support', type: 'link' }
    ]
  },
  {
    title: 'Support', icon: 'icon-headphone-alt', type: 'sub',active: false, children: [
      { path: '/compact-sidebar/pages/page', title: 'Ticket', type: 'link' },          
      { path: '/compact-sidebar/pages/page', title: 'Blog', type: 'link' },         
      { path: '/compact-sidebar/pages/page', title: 'Pricing', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Privacy', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Policy', type: 'link' },
      { path: '/compact-sidebar/pages/page', title: 'Documentation', type: 'link' }
    ]
  }
]
items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}