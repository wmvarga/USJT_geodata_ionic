import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPaisesPage } from './lista-paises';

@NgModule({
  declarations: [
    ListaPaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPaisesPage),
  ],
})
export class ListaPaisesPageModule {}
