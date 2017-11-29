import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';


const DIRECTIVES = [ ];
const PIPES = [];

/**
 * 公共模块, 多处使用的模块,可以在此导入
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgZorroAntdModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...DIRECTIVES,
    ...PIPES
  ],
  providers: [

  ],
  entryComponents: [

  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgZorroAntdModule,

    FormsModule,
    ReactiveFormsModule,

    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        // Services
      ]
    };
  }
}
