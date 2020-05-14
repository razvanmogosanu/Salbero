import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../SharedService';
import { Produs } from 'src/app/structura_produs'
import { listaProduse } from 'src/app/lista_produse';

@Component({
selector: 'app-produse',
templateUrl: './produse.component.html',
styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {
constructor(private service: SharedService) { }
  produse = listaProduse;
ngOnInit(): void {
  }
getTheme(){
    return this.service.getLink();
  }
}
