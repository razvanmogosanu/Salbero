import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../SharedService';
import {Produs} from 'src/app/structura_produs';
import {listaProduse} from 'src/app/lista_produse';

@Component({
    selector: 'app-produse',
    templateUrl: './produse.component.html',
    styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {
    produse: Produs[];

    constructor(private service: SharedService) {
        this.resolveProducts();
    }

    resolveProducts() {
        this.produse = [];
        let theme = this.service.getLink();

        if (theme === 'produse') {
            this.produse = listaProduse;
        } else {
            theme = theme.toLowerCase();
            for (const entry of listaProduse) {
                if (entry.name.toLowerCase().includes(theme)) {
                    this.produse.push(entry);
                }
            }

        }
        return this.produse;
    }

    ngOnInit(): void {

    }

    getTheme() {
        return this.service.getLink();
    }

    goItem(produs: Produs) {
        this.service.setItem(produs);
    }

}
