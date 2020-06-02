import { Component, OnInit } from '@angular/core';
import {listaProduse} from '../../lista_produse';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results = listaProduse;
  options: ['caca', 'part'];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  constructor() {
    // for (let i = 0; i < listaProduse.length; i++) {
    //   this.options[i] = listaProduse[i].name;
    // }
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  displayFn(subject) {
    return subject ? subject.name : undefined;
  }
}
