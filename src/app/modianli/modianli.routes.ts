import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from "../layout/layout.component";
import {IndexComponent} from "./index/index.component";
import {Page404Component} from "./pages/page404/page404.component";


const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'index/haha/haha',
        component: IndexComponent
      }
    ]
  },
  {
    path: '**',
    component: Page404Component
  }
];

export const MODIANLI_ROUTE = RouterModule.forRoot(routes);
