import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import { MODIANLI_ROUTE } from "./modianli.routes";
import { IndexComponent } from './index/index.component';
import {LayoutModule} from "../layout/layout.module";

/**
 * 应用业务逻辑
 */
@NgModule({
  imports: [
    SharedModule,
    LayoutModule,

    MODIANLI_ROUTE
  ],
  declarations: [
    IndexComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ModianliModule { }
