import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {

  private breadcrumb = [];

  constructor(private router: Router) {
    router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      const url = event['url'];
      const urlCrumb = url.split("/");
      if (urlCrumb.length > 1) {
        this.breadcrumb = urlCrumb.splice(1);
      }
    });
  }

  ngOnInit() {
  }

}
