import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AcasaComponent} from './components/acasa/acasa.component';
import {ProduseComponent} from './components/produse/produse.component';
import {DespreNoiComponent} from './components/despre-noi/despre-noi.component';
import {ContactComponent} from './components/contact/contact.component';


const routes: Routes = [
  {path: '', component: AcasaComponent},
  {path: 'produse', component: ProduseComponent},
  {path: 'despre-noi', component: DespreNoiComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
