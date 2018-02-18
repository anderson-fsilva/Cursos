import { Component, OnInit } from '@angular/core';

// Importanto a classe do serviço
import {CursosService} from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];


  constructor(public cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';
 

    // Criando uma instância do serviço
    //var servico = new CursosService (); 
    this.cursos = this.cursosService.getCursos();

   }

  ngOnInit() {
  }

}
