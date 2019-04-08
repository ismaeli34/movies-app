import { BaseService } from './../services/base.service';
import { SideNavService } from './../services/side-nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  constructor(private SideNavService: SideNavService,
    private baseService: BaseService) {
  }

  toggleSideNav() {
    console.log("button clicked");
    this.SideNavService.toggle();
  }

  ngOnInit() {
  }

}
