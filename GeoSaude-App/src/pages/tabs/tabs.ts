import { Component } from '@angular/core';
import { PerfilPage } from '../perfil/perfil';
import { ConquistasPage } from '../conquistas/conquistas';
import { AtividadesPage } from '../atividades/atividades';
import { MapaPage } from '../mapa/mapa';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PerfilPage;
  tab2Root = ConquistasPage;
  tab3Root = AtividadesPage;
  tab4Root = MapaPage;

  constructor() {

  }
}
