import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  images = ['../../../assets/sediu.png', '../../../assets/unnamed.jpg', '../../../assets/unamed2.jpg'];
  selectedImage = this.images[0];
  constructor() { }
  ngOnInit(): void {
  }

  onSelect(img) {
    this.selectedImage = img;
  }

}
