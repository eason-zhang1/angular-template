import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }

  @Output()
  collapsedEmitter = new EventEmitter<boolean>();

  toggleCollapsedSideabar() {
    this.isCollapsed = !this.isCollapsed;
    // 发射事件
    this.collapsedEmitter.emit(this.isCollapsed);
  }

  loading = true;

  change() {
    setTimeout(() => this.loading = false, 500);
  }
}
