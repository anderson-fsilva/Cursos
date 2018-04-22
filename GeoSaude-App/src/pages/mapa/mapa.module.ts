import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaPage } from './mapa';
import { MapModalPage } from '../map-modal/map-modal';
import { ImovelPage } from '../imovel/imovel'

@NgModule({
  declarations: [
    MapaPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaPage),
  ],
})
export class MapaPageModule {}
