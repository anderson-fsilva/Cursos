import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://www.nature.com/news/2017/170628/thumbs/homepage546585a-i1.0.jpg'  

  getValor(){
    return 2;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
