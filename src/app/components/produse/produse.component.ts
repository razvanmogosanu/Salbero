import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../SharedService';
import {Produs} from 'src/app/structura_produs';
import {listaProduse} from 'src/app/lista_produse';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-produse',
    templateUrl: './produse.component.html',
    styleUrls: ['./produse.component.css']
})
export class ProduseComponent implements OnInit {
    produse: Produs[];

    constructor(private service: SharedService, private router: Router) {
        this.resolveProducts();
    }

    resolveProducts() {
        this.produse = [];
        let theme = this.service.getLink();
        console.log(theme + ' ');
        if (theme === 'produse') {
            this.produse = listaProduse;
        } else {
            theme = theme.toLowerCase();
            let searchedWords: string[];
            searchedWords = theme.split(' ');
            for (const entry of listaProduse) {
                for (const word of searchedWords){
                    if (entry.tags.includes(word)) {
                        this.produse.push(entry);
                        break;
                    }
                }
            }

        }
        return this.produse;
    }

    ngOnInit(): void {
    }

    getTheme() {
        let url = this.router.url.toLowerCase();
        console.log(url);
        // tslint:disable-next-line:max-line-length
        if (url.includes('search')) {
            return 'Acestea sunt rezultatele pentru "' + this.service.getLink() + '"';
        } else {
            url = url.substr(8);
            if (url.length < 1) {
                return 'Disponibile ';
            } else {
                return url;
            }
        }

    }

    getNofProducts() {
        const url = this.router.url.toLowerCase();
        return this.produse.length + ' de produse.';
    }

    goItem(produs: Produs) {
        this.service.setItem(produs);
    }

    translateProductNameInLink(product: Produs) {
        let name = product.name;
        let x = 0;
        while (x !== -1) {
            name = name.replace(' ', '-');
            x = name.indexOf(' ');
        }
        return name.toLocaleLowerCase();
    }
}
