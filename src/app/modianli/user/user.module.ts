import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {LayoutModule} from "../../layout/layout.module";


import {LoginComponent} from './login/login.component';
import {UserComponent} from "../../layout/user/user.component";


const userRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    LayoutModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule {
}
