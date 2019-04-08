import { SideNavService } from './services/side-nav.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('drawer') public sidenav: MatSidenav;  
  constructor(private sideNavService: SideNavService,
    private router: Router) {
  }
  showFiller = false;
  menus = [
    { name: 'Home', icon: 'home' },
    { name: 'Genres', icon: 'movie' }
  ]

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
  }

  navigateMenu(menu) {
    console.log("Button clicked", menu
    );
    switch (menu) {
      case "Home":
      this.router.navigate(['/home']);
      break;
      case "Genres":
      this.router.navigate(['/genres']);
      break;
      default:
      break;


    }

  }
}
