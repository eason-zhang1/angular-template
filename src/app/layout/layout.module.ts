import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";


import { UserComponent } from './user/user.component';
import { LayoutComponent } from "./layout.component";
import { SiderComponent } from './sider/sider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
/**
 * 布局
 */
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    UserComponent,
    LayoutComponent,
    SiderComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  exports: [
    UserComponent,
    LayoutComponent,
  ]
})
export class LayoutModule { }
