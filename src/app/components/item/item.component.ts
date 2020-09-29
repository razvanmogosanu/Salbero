import {Component, OnInit} from '@angular/core';
import {Produs} from '../../structura_produs';
import {SharedService} from '../../SharedService';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
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
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        window.scrollTo(0, 0);
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });

        let urlString = this.route.snapshot.url[0].toString();
        let x = 0;
        while (x !== -1) {
            urlString = urlString.replace('%20', ' ');
            x = urlString.indexOf('%20');
        }
        for (const produs of listaProduse) {
            if (produs.name === urlString) {
                this.item = produs;
                this.images = produs.urlImage;
                this.selectedImage = this.images[0];
                break;
            }
        }

        this.getScreenSize();
    }

    onSelect(img) {
        this.selectedImage = img;
    }

    getScreenSize() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;

    }

    getDecimalPart() {
        const price = this.item.price;
        const decimal = price.indexOf('.');

        if (decimal === -1) {
            return price;
        }
        return price.substr(0, decimal);
    }

    getFloatingPart() {
        const price = this.item.price;
        const decimal = price.indexOf('.');
        if (decimal === -1) {
            return '00';
        }
        return price.substr(decimal + 1);
    }
}
