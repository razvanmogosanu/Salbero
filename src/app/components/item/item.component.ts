import {HostListener, Component, OnInit } from '@angular/core';
import {Produs} from '../../structura_produs';
import {SharedService} from '../../SharedService';
import {ActivatedRoute} from '@angular/router';
import {listaProduse} from '../../lista_produse';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Produs;
  images: string[];
  selectedImage: string;
  screenHeight: number;
  screenWidth: number;
  constructor(public service: SharedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const url = this.route.snapshot.url[1];
    let urlString = url.toString();
    let x = 0;
    while (x !== -1){
      urlString = urlString.replace('%20', ' ');
      x = urlString.indexOf('%20');
    }
    for (const produs of listaProduse) {
      if (produs.name === urlString) {
        this.item = produs;
        this.images = produs.urlImage;
        this.selectedImage = this.images[0];
      }
    }
  }

  onSelect(img) {
    this.selectedImage = img;
  }
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
}
