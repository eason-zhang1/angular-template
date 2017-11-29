import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import {LayoutModule} from "../layout/layout.module";
import {PagesModule} from "./pages/pages.module";
import { AbmModule } from 'angular-baidu-maps';

import { MODIANLI_ROUTE } from "./modianli.routes";


import { IndexComponent } from './index/index.component';

/**
 * 应用业务逻辑
 */
@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    PagesModule,

    MODIANLI_ROUTE,
    AbmModule.forRoot({
      apiKey: 'p3HIQIqLqKVQOXao1IiLp5O0eTFakjEP' // app key为必选项
    })
  ],
  declarations: [
    IndexComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ModianliModule { }
