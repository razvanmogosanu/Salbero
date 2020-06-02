import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcasaComponent } from './components/acasa/acasa.component';
import {RouterModule} from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import {AppRoutingModule} from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ProduseComponent } from './components/produse/produse.component';
import { DespreNoiComponent } from './components/despre-noi/despre-noi.component';
import { ItemComponent } from './components/item/item.component';
import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcasaComponent,
    ContactComponent,
    FooterComponent,
    ProduseComponent,
    DespreNoiComponent,
    ItemComponent,
    SearchComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        RouterModule,
        RouterModule.forRoot([]),
        AppRoutingModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
