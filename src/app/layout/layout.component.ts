import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() { }

  collapsedChange(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
  }

}
