import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    link = String();
    constructor() { }

    setLink(link) {
        this.link = link;
    }

    getLink(){
        return this.link;
    }
}
