import {Injectable} from '@angular/core';
import {Produs} from './structura_produs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    link = String();
    item;
    constructor() { }

    setLink(link) {
        this.link = link;
    }

    getLink(){
        return this.link;
    }
    setItem(produs: Produs) {
        this.item = produs;
    }
    getItem() {
        return this.item;
    }
}
