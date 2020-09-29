import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../SharedService';

@Component({
    selector: 'app-acasa',
    templateUrl: './acasa.component.html',
    styleUrls: ['./acasa.component.css']
})
export class AcasaComponent implements OnInit {

    constructor(private service: SharedService, private router: Router) {
    }

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }
    setTheme(theme: string) {
      this.service.setLink(theme);
    }
}
