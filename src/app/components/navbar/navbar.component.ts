import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  ) {
  }

  navbarDevice = false;
  dropdown = false;
  dropdownClass = '';
  toggleNavbar() {
    this.navbarDevice = !this.navbarDevice;
  }
  setDropdown(status: boolean){
    this.dropdown = status;
    this.dropdownClass = (!this.dropdown) ? '' : 'show';
  }
  ngOnInit(): void {
  }
}
