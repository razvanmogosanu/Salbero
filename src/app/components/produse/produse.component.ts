import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../SharedService';
import { Produs } from 'src/app/structura_produs';
import { listaProduse } from 'src/app/lista_produse';
import {Router} from '@angular/router';

@Component({
selector: 'app-produse',
templateUrl: './produse.component.html',
styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {
constructor(private service: SharedService,
            private router: Router) { }
    produse = listaProduse;
    ngOnInit(): void {
      }
    getTheme(){
        return this.service.getLink();
    }
    goItem(produs: Produs) {
        this.router.navigateByUrl('item');
        this.service.setItem(produs);
    }
}
