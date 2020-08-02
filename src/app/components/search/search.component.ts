import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {listaProduse} from '../../lista_produse';
import {SharedService} from '../../SharedService';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    @ViewChild('myInput')
    myInputVariable: ElementRef;
    results = listaProduse;

    inputValue: string;

    constructor(private service: SharedService) {

    }

    ngOnInit(): void {
    }
    takeInput(event) {
        this.inputValue = event.target.value;
    }
    reset() {
        this.service.setLink(this.myInputVariable.nativeElement.value);
        this.myInputVariable.nativeElement.value = '';
    }
}
