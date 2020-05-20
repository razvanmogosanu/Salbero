import { Component, OnInit } from '@angular/core';
import {Produs} from '../../structura_produs';
import {SharedService} from '../../SharedService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Produs = this.service.getItem();
  images = this.item.urlImage;
  description = this.item.description;
  selectedImage = this.images[0];
  constructor(public service: SharedService) { }
  ngOnInit(): void {
  }
  onSelect(img) {
    this.selectedImage = img;
  }
}
