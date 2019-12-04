import { Routes } from '@angular/router';

export const compactSidebarIcons: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../general/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('../../pages/page/page.module').then(m => m.PageModule)
  }
];