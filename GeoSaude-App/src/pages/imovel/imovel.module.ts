import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImovelPage } from './imovel';

@NgModule({
  declarations: [
    ImovelPage,
  ],
  imports: [
    IonicPageModule.forChild(ImovelPage),
  ],
})
export class ImovelPageModule {}
