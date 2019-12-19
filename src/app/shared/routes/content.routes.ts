import { Routes, RouterModule } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../general/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'widgets',
    loadChildren: () => import('../../general/widgets/widgets.module').then(m => m.WidgetsModule),
  },
  {
    path: 'base',
    loadChildren: () => import('../../components/base/base.module').then(m => m.BaseModule),
  },
  {
    path: 'advance',
    loadChildren: () => import('../../components/advance/advance.module').then(m => m.AdvanceModule),
  },
  {
    path: 'icons',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule),
  },
  {
    path: 'buttons',
    loadChildren: () => import('../../components/buttons/buttons.module').then(m => m.ButtonsModule),
  },
  {
    path: 'form',
    loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormModule),
  },
  {
    path: 'map',
    loadChildren: () => import('../../components/map/map.module').then(m => m.MapModule),
  },
  {
    path: 'table',
    loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule),
  },
  {
    path: 'cards',
    loadChildren: () => import('../../components/cards/cards.module').then(m => m.CardsModule),
  },
  {
    path: 'timeline',
    loadChildren: () => import('../../components/timeline/timeline.module').then(m => m.TimelineModule),
  },
  {
    path: 'chart',
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule),
  },
  {
    path: 'editor',
    loadChildren: () => import('../../components/editor/editor.module').then(m => m.EditorModule),
  },
  {
    path: 'users',
    loadChildren: () => import('../../apps/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'calender',
    loadChildren: () => import('../../apps/calender/calender.module').then(m => m.CalenderModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('../../apps/blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: 'email',
    loadChildren: () => import('../../apps/email/email.module').then(m => m.EmailModule),
  },
  {
    path: 'chat',
    loadChildren: () => import('../../apps/chat/chat.module').then(m => m.ChatModule),
  },
  {
    path: 'support',
    loadChildren: () => import('../../apps/support/support.module').then(m => m.SupportModule),
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('../../apps/ecommerce/ecommerce.module').then(m => m.EcommerceModule),
  },
  {
    path: 'pricing',
    loadChildren: () => import('../../apps/pricing/pricing.module').then(m => m.PricingModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('../../pages/page/page.module').then(m => m.PageModule),
  },
  {
    path: 'search-result',
    loadChildren: () => import('../../pages/search-result/search-result.module').then(m => m.SearchResultModule),
  },
  {
    path: 'to-do',
    loadChildren: () => import('../../apps/to-do/to-do.module').then(m => m.ToDoModule),
  },
  {
    path: 'contact',
    loadChildren: () => import('../../apps/contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'basic',
    loadChildren: () => import('../../components/misCompras/basic/basic.module').then(m => m.BasicModule),
  },{
    path:'producto',
    loadChildren:() => import('../../components/misCompras/producto/producto.module').then(m=>m.ProductoModule),
  },
  {
    path:'dashboard',
    loadChildren:() => import('../../components/misCompras/dashboard/dashboard.module').then(m=>m.DashboardModule),
  },
  {
    path:'comercio',
    loadChildren:() => import('../../components/misCompras/comercio/comercio.module').then(m=>m.ComercioModule),
  }
];
