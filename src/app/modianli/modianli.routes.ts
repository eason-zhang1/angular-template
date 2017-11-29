import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from "../layout/layout.component";
import {IndexComponent} from "./index/index.component";


const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      }
    ]
  }
];

export const MODIANLI_ROUTE = RouterModule.forRoot(routes);
