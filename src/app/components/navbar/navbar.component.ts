import {HostListener, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../SharedService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: SharedService,
              private router: Router) {
    this.getScreenSize();
    this.clicksOnProduse = 0;
  }

  navbarDevice = false;
  dropdown = false;
  dropdownClass = '';
  screenHeight: number;
  screenWidth: number;
  clicksOnProduse: number;
  toggleNavbar(activate: boolean) {
    this.navbarDevice = activate;
  }
  setDropdown(status: boolean){
    this.dropdown = status;
    this.dropdownClass = (!this.dropdown) ? '' : 'show';
  }
  ngOnInit(): void {
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }


  setTheme(theme) {
    this.service.setLink(theme);
    if (this.screenWidth > 600) {
      // this.router.navigateByUrl('produse');
      this.setDropdown(false);
    } else {
      if (this.clicksOnProduse > 0) {
        this.setDropdown(false);
        this.toggleNavbar(false);
        this.router.navigateByUrl('produse');
        this.clicksOnProduse = 0;
      } else {
        this.clicksOnProduse++;
      }
    }
  }
}
