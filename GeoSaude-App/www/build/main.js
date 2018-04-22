webpackJsonp([11],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AedesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__culex_culex__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AedesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AedesPage = /** @class */ (function () {
    function AedesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.visitContent = this.navParams.get('visitParams'); // Recebendo o parâmetro passado como argumento
    }
    AedesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AedesPage');
    };
    AedesPage.prototype.GotoCulexPage = function (visitContent) {
        //console.log(visitContent.containerType);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__culex_culex__["a" /* CulexPage */], { visitContent: visitContent });
    };
    AedesPage.prototype.GotoHomePageRunBack = function () {
        this.navCtrl.pop();
    };
    AedesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-aedes',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/aedes/aedes.html"*/'<!--\n  Generated template for the AedesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-label>\n\n    <h1 align="center">AEDES</h1>\n    <b></b>\n    <h2 align="center">Tipos de Criadouros</h2>\n\n  </ion-label>\n  <ion-list>\n    <ion-item>\n      <ion-label>A1</ion-label>\n      <ion-checkbox checked="false" value="A1"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>A2</ion-label>\n      <ion-checkbox checked="false" value="A2"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>B</ion-label>\n      <ion-checkbox checked="false" value="B"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>C</ion-label>\n      <ion-checkbox checked="false" value="C"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>D1</ion-label>\n      <ion-checkbox checked="false" value="D1"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>D2</ion-label>\n      <ion-checkbox checked="false" value="D2"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>E</ion-label>\n      <ion-checkbox checked="false" value="E"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n  <div text-center>\n    \n      <button ion-button icon-left (click)="GotoHomePageRunBack()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n        Anterior\n      </button>\n\n      <button ion-button icon-center (click)="GotoCulexPage(visitContent)">\n        Próximo &nbsp;                                            <!-- &nbsp é para dar espaço --> \n        <ion-icon name="md-arrow-forward"></ion-icon>\n      </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/aedes/aedes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AedesPage);
    return AedesPage;
}());

//# sourceMappingURL=aedes.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CulexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tratamento_tratamento__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CulexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CulexPage = /** @class */ (function () {
    function CulexPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CulexPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CulexPage');
    };
    CulexPage.prototype.GotoAedesPageRunBack = function () {
        this.navCtrl.pop();
    };
    CulexPage.prototype.GotoTratamentoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tratamento_tratamento__["a" /* TratamentoPage */]);
    };
    CulexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-culex',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/culex/culex.html"*/'<!--\n  Generated template for the CulexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-label>\n    <h1 align="center">CÚLEX</h1>\n    <h2 align="center">Tipos de Criadouros</h2>\n  </ion-label>\n  <ion-list>\n    <ion-item>\n      <ion-label>Fossa</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cisterna</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Canal/Canaletas/Valas</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Charco</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Caixa de Inspeção/Drenagem</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n\n  <!-- Botões de voltar e avançar -->\n\n  <div text-center>\n\n    <button ion-button icon-left (click)="GotoAedesPageRunBack()">\n      <ion-icon name="md-arrow-back"></ion-icon>\n      Anterior\n    </button>\n\n    <button ion-button icon-right (click)=" GotoTratamentoPage()">\n      Próximo\n      <ion-icon name="md-arrow-forward"></ion-icon>\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/culex/culex.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CulexPage);
    return CulexPage;
}());

//# sourceMappingURL=culex.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TratamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imovel_imovel__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TratamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TratamentoPage = /** @class */ (function () {
    function TratamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TratamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TratamentoPage');
    };
    TratamentoPage.prototype.GotoCulexPageRunBack = function () {
        this.navCtrl.pop();
    };
    TratamentoPage.prototype.GotoHomePageRunBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__imovel_imovel__["a" /* ImovelPage */]);
    };
    TratamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tratamento',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/tratamento/tratamento.html"*/'<!--\n  Generated template for the TratamentoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-label>\n      <ion-label>\n        <h1 align="center">Tratamento</h1>\n        <h2 align="center">Tipos de Tratamento</h2>\n      </ion-label>\n\n    </ion-label>\n\n    <ion-item>\n      <ion-label>Positivo</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Mecânico</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Biológico</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Químico</ion-label>\n      <ion-checkbox checked="false"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-label>\n      <h4>BTI G</h4>\n    </ion-label>\n\n    <ion-item>\n      <ion-label>Gramas</ion-label>\n      <ion-input type="number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Depósito</ion-label>\n      <ion-input type="number"></ion-input>\n    </ion-item>\n\n    <ion-label>\n\n      <h4>BTI WDg</h4>\n\n    </ion-label>\n    <ion-item>\n      <ion-label>Gramas</ion-label>\n      <ion-input type="number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Depósito</ion-label>\n      <ion-input type="number"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-label>\n    <h4>BsG</h4>\n  </ion-label>\n  <ion-item>\n    <ion-label>Gramas</ion-label>\n    <ion-input type="number"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Depósito</ion-label>\n    <ion-input type="number"></ion-input>\n  </ion-item>\n\n  <br>\n  <br>\n  <!-- Botões de voltar e avançar -->\n\n  <div text-center>\n\n    <button ion-button icon-left (click)="GotoCulexPageRunBack()">\n      <ion-icon name="md-arrow-back"></ion-icon>\n      Anterior\n    </button>\n\n    <!-- Float the icon right -->\n    <button ion-button icon-right (click)="GotoHomePageRunBack()">\n      Finalizar\n      <ion-icon name="ios-cloudy"></ion-icon>\n    </button>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/tratamento/tratamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TratamentoPage);
    return TratamentoPage;
}());

//# sourceMappingURL=tratamento.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtividadesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imovel_imovel__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_form_lira_form_lira__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AtividadesPage = /** @class */ (function () {
    function AtividadesPage(navCtrl, navParams, formLiraProvider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formLiraProvider = formLiraProvider;
        this.toast = toast;
        /*
        ionViewDidEnter() {
          this.formLiraProvider.getAll()
            .then((result) => {
              console.log(result);
              this.locales = result;
            })
        }
        */
        // Items vai conter os nomes da ruas. Isto deverá ser definido por regiões/quarterões posteriormente.
        // O supervisor deverá definir estes quarterões. Geralmente eles não irão mudar com frequência.
        this.items = [
            'Rua Marquês de Baipendi',
            'Rua Cirilino Afonso de Melo',
            'Rua Mario Sete',
            'Rua São Caetano',
            'Av Agamenon Magalhães',
            'Rua Guaianazes',
            'Rua Esberard',
            'Rua Pereira Passos',
            'Rua Nova',
            'Rua Projetada',
            'Rua Ledinha'
        ];
        // Criando um novo objeto VisitInformation
        this.visitInformation = new __WEBPACK_IMPORTED_MODULE_3__providers_form_lira_form_lira__["b" /* VisitInformation */]();
    }
    AtividadesPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    // Após o clique sobre uma rua, o nome da rua será inserida no campo do objeto visitInformation.
    AtividadesPage.prototype.GotoImovelPage = function (item) {
        // Inserindo valor no objeto.
        this.visitInformation.street = item;
        // Chama a nova página e passa como parâmetro o objeto visitInformation.
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__imovel_imovel__["a" /* ImovelPage */], { parameter: this.visitInformation });
    };
    AtividadesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-atividades',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/atividades/atividades.html"*/'<!--\n  Generated template for the AtividadesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <!-- Botão para o side menu -->\n \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Atividades</ion-title>\n \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list inset>\n    <button ion-item *ngFor="let item of items" (click)="GotoImovelPage(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/atividades/atividades.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_form_lira_form_lira__["a" /* FormLiraProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_form_lira_form_lira__["a" /* FormLiraProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object])
    ], AtividadesPage);
    return AtividadesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=atividades.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConquistasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConquistasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConquistasPage = /** @class */ (function () {
    function ConquistasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConquistasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConquistasPage');
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Ibura", "Derby", "Pina", "Várzea", "Barro", "Torre"],
                datasets: [{
                        label: 'Nº de visitas',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Completo", "Incompleto"],
                datasets: [{
                        label: 'Percentual',
                        data: [63, 37],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB"
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Ciclo 1", "Ciclo 2", "Ciclo 3", "Ciclo 4", "Ciclo 5", "Ciclo 6", "Ciclo 7"],
                datasets: [
                    {
                        label: "Nº de ocorrências",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ConquistasPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ConquistasPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ConquistasPage.prototype, "lineCanvas", void 0);
    ConquistasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-conquistas',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/conquistas/conquistas.html"*/'<!--\n  Generated template for the ConquistasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <!-- Botão para o side menu -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Conquistas</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Visitas\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Ciclo(%)\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #doughnutCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Ocorrências\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/conquistas/conquistas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConquistasPage);
    return ConquistasPage;
}());

//# sourceMappingURL=conquistas.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.GotoTabsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding class="display_settings">\n\n  <!--<ion-card class="cards">-->\n\n  <div class="title_app"> \n    Geo-Saúde\n  </div>\n\n  <ion-card class="cards">\n    <div class="itens">\n      <ion-item style="background: #F2F2F2; color:#06425C">\n        <ion-label floating>Usuário</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item style="background: #F2F2F2; color:#06425C">\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n\n    </div>\n\n  </ion-card>\n\n\n  <!--</ion-card>-->\n\n  <button ion-button style="background:#063a5c" round class="button_settings" (click)="GotoTabsPage()">Logar</button>\n\n</ion-content>'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/perfil/perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <!-- Botão para o side menu -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div align="center">\n\n    <ion-avatar class="avatar" item-start>\n      <img [style.border]="\'1px solid\'" src="./assets/imgs/img_agente_1.jpg">\n    </ion-avatar>\n\n  </div>\n\n  <ion-item>\n    <br>\n    <h1 align="center">Luiza Ribeiro</h1>\n    <br>\n    <p align="center">Agente de Saúde Ambiental</p>\n    <br>\n    <p align="center">Posto de Saúde da Várzea</p>\n  </ion-item>\n\n  <ion-item>\n\n    <table>\n\n      <tr align="center">\n\n        <th>\n          <img src="./assets/imgs/medalhas/medal-1.png" width="50%">\n\n          <th>\n            <img src="./assets//imgs/medalhas/medal-2.png" width="50%">\n\n            <th>\n              <img src="./assets/imgs/medalhas/medal-3.png" width="50%">\n\n              <th>\n                <img src="./assets/imgs/medalhas/medal-4.png" width="50%">\n\n\n      </tr>\n\n    </table>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_modal_map_modal__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_controllers_generic_controller__ = __webpack_require__(428);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapaPage = /** @class */ (function (_super) {
    __extends(MapaPage, _super);
    function MapaPage(navCtrl, navParams, modalCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.geocoder = new google.maps.Geocoder;
        return _this;
    }
    MapaPage.prototype.openModal = function (latLng) {
        var mctrl = this.modalCtrl;
        this.geocodeLatLng(latLng, function (addr) {
            var myModal = mctrl.create(__WEBPACK_IMPORTED_MODULE_2__map_modal_map_modal__["a" /* MapModalPage */], { address: addr });
            myModal.present();
        });
    };
    MapaPage.prototype.geocodeLatLng = function (input, callback) {
        var latlngStr = input.split(',', 2);
        var latlng = { lat: parseFloat(latlngStr[0].slice(1)), lng: parseFloat(latlngStr[1]) };
        var result = this.geocoder.geocode({ 'location': latlng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    callback(results[0].formatted_address);
                }
                else {
                    console.log('No results found');
                }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    };
    MapaPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    MapaPage.prototype.showMap = function () {
        // localização - latitude e longitude
        var location = new google.maps.LatLng(-8.05362071, -34.95265961);
        var options = {
            center: location,
            zoom: 16,
            streetViewControl: true,
            mapTypeId: 'terrain' // 'satellite' / 'hybrid
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        var _loop_1 = function (place) {
            var g_location = new google.maps.LatLng(place[0], place[1]);
            var visited = place[2];
            var marker = this_1.addMarker(g_location, map, visited);
            var self_1 = this_1;
            marker.addListener('click', function (ev) {
                self_1.openModal(marker.getPosition().toString());
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.getCurrentUser().schedule; _i < _a.length; _i++) {
            var place = _a[_i];
            _loop_1(place);
        }
    };
    MapaPage.prototype.addMarker = function (position, map, visited) {
        var icon = 'http://maps.google.com/mapfiles/ms/icons/red.png';
        if (visited) {
            icon = 'http://maps.google.com/mapfiles/ms/icons/blue.png';
        }
        return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MapaPage.prototype, "mapRef", void 0);
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/mapa/mapa.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <!-- Botão para o side menu -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      Mapa\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/mapa/mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], MapaPage);
    return MapaPage;
}(__WEBPACK_IMPORTED_MODULE_3__app_controllers_generic_controller__["a" /* GenericController */]));

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MapModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapModalPage = /** @class */ (function () {
    function MapModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.address = this.navParams.get('address');
    }
    MapModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    MapModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapModalPage');
    };
    MapModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map-modal',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/map-modal/map-modal.html"*/'<!--\n  Generated template for the MapModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{address}}</ion-title>\n    <ion-buttons end>\n      <button ion-button block (click)="closeModal()">Fechar</button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n      <ion-list>\n      <ion-item>\n        <ion-label>Tipo de Imovel</ion-label>\n        <ion-select [(ngModel)]="TipoDeImovel">\n          <ion-option value="res">Residência</ion-option>\n          <ion-option value="com">Comercio</ion-option>\n          <ion-option value="ind">Indústria</ion-option>\n          <ion-option value="SerP">Serviço Privado</ion-option>\n          <ion-option value="resC">Residência Com</ion-option>\n          <ion-option value="imovCon">Imovel em Construção</ion-option>\n          <ion-option value="terBal">Terreno Baldio</ion-option>\n          <ion-option value="ponEs">Ponto Estratégico</ion-option>\n          <ion-option value="out">Outros</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Situação</ion-label>\n        <ion-select [(ngModel)]="situacao">\n          <ion-option value="insp">Inspecionado</ion-option>\n          <ion-option value="inspN">Não Inspecionado</ion-option>\n          <ion-option value="recu">Recuperado</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label>Data</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n\n    <button ion-button color="secondary" round full (click)= "closeModal()">Atualizar Situação</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/map-modal/map-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], MapModalPage);
    return MapModalPage;
}());

//# sourceMappingURL=map-modal.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/sobre/sobre.html"*/'<!--\n  Generated template for the SobrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Sobre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/sobre/sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aedes/aedes.module": [
		455,
		10
	],
	"../pages/atividades/atividades.module": [
		456,
		9
	],
	"../pages/conquistas/conquistas.module": [
		457,
		8
	],
	"../pages/culex/culex.module": [
		458,
		7
	],
	"../pages/imovel/imovel.module": [
		459,
		6
	],
	"../pages/login/login.module": [
		460,
		5
	],
	"../pages/map-modal/map-modal.module": [
		461,
		4
	],
	"../pages/mapa/mapa.module": [
		462,
		3
	],
	"../pages/perfil/perfil.module": [
		463,
		2
	],
	"../pages/sobre/sobre.module": [
		464,
		1
	],
	"../pages/tratamento/tratamento.module": [
		465,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__perfil_perfil__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conquistas_conquistas__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__atividades_atividades__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapa_mapa__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__perfil_perfil__["a" /* PerfilPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__conquistas_conquistas__["a" /* ConquistasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__atividades_atividades__["a" /* AtividadesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__mapa_mapa__["a" /* MapaPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Perfil" tabIcon="md-contact"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Conquistas" tabIcon="md-trophy"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Atividades" tabIcon="ios-list-box-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Mapa" tabIcon="ios-map"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_conquistas_conquistas__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_atividades_atividades__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mapa_mapa__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_imovel_imovel__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_map_modal_map_modal__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sobre_sobre__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_aedes_aedes__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_culex_culex__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tratamento_tratamento__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_form_lira_form_lira__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_conquistas_conquistas__["a" /* ConquistasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_atividades_atividades__["a" /* AtividadesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_imovel_imovel__["a" /* ImovelPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_map_modal_map_modal__["a" /* MapModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_aedes_aedes__["a" /* AedesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_culex_culex__["a" /* CulexPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tratamento_tratamento__["a" /* TratamentoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aedes/aedes.module#AedesPageModule', name: 'AedesPage', segment: 'aedes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/atividades/atividades.module#AtividadesPageModule', name: 'AtividadesPage', segment: 'atividades', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conquistas/conquistas.module#ConquistasPageModule', name: 'ConquistasPage', segment: 'conquistas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/culex/culex.module#CulexPageModule', name: 'CulexPage', segment: 'culex', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/imovel/imovel.module#ImovelPageModule', name: 'ImovelPage', segment: 'imovel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-modal/map-modal.module#MapModalPageModule', name: 'MapModalPage', segment: 'map-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tratamento/tratamento.module#TratamentoPageModule', name: 'TratamentoPage', segment: 'tratamento', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_conquistas_conquistas__["a" /* ConquistasPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_atividades_atividades__["a" /* AtividadesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_imovel_imovel__["a" /* ImovelPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_map_modal_map_modal__["a" /* MapModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_aedes_aedes__["a" /* AedesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_culex_culex__["a" /* CulexPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tratamento_tratamento__["a" /* TratamentoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_20__providers_form_lira_form_lira__["a" /* FormLiraProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 175,
	"./af.js": 175,
	"./ar": 176,
	"./ar-dz": 177,
	"./ar-dz.js": 177,
	"./ar-kw": 178,
	"./ar-kw.js": 178,
	"./ar-ly": 179,
	"./ar-ly.js": 179,
	"./ar-ma": 180,
	"./ar-ma.js": 180,
	"./ar-sa": 181,
	"./ar-sa.js": 181,
	"./ar-tn": 182,
	"./ar-tn.js": 182,
	"./ar.js": 176,
	"./az": 183,
	"./az.js": 183,
	"./be": 184,
	"./be.js": 184,
	"./bg": 185,
	"./bg.js": 185,
	"./bn": 186,
	"./bn.js": 186,
	"./bo": 187,
	"./bo.js": 187,
	"./br": 188,
	"./br.js": 188,
	"./bs": 189,
	"./bs.js": 189,
	"./ca": 190,
	"./ca.js": 190,
	"./cs": 191,
	"./cs.js": 191,
	"./cv": 192,
	"./cv.js": 192,
	"./cy": 193,
	"./cy.js": 193,
	"./da": 194,
	"./da.js": 194,
	"./de": 195,
	"./de-at": 196,
	"./de-at.js": 196,
	"./de-ch": 197,
	"./de-ch.js": 197,
	"./de.js": 195,
	"./dv": 198,
	"./dv.js": 198,
	"./el": 199,
	"./el.js": 199,
	"./en-au": 200,
	"./en-au.js": 200,
	"./en-ca": 201,
	"./en-ca.js": 201,
	"./en-gb": 202,
	"./en-gb.js": 202,
	"./en-ie": 203,
	"./en-ie.js": 203,
	"./en-nz": 204,
	"./en-nz.js": 204,
	"./eo": 205,
	"./eo.js": 205,
	"./es": 206,
	"./es-do": 207,
	"./es-do.js": 207,
	"./es.js": 206,
	"./et": 208,
	"./et.js": 208,
	"./eu": 209,
	"./eu.js": 209,
	"./fa": 210,
	"./fa.js": 210,
	"./fi": 211,
	"./fi.js": 211,
	"./fo": 212,
	"./fo.js": 212,
	"./fr": 213,
	"./fr-ca": 214,
	"./fr-ca.js": 214,
	"./fr-ch": 215,
	"./fr-ch.js": 215,
	"./fr.js": 213,
	"./fy": 216,
	"./fy.js": 216,
	"./gd": 217,
	"./gd.js": 217,
	"./gl": 218,
	"./gl.js": 218,
	"./gom-latn": 219,
	"./gom-latn.js": 219,
	"./he": 220,
	"./he.js": 220,
	"./hi": 221,
	"./hi.js": 221,
	"./hr": 222,
	"./hr.js": 222,
	"./hu": 223,
	"./hu.js": 223,
	"./hy-am": 224,
	"./hy-am.js": 224,
	"./id": 225,
	"./id.js": 225,
	"./is": 226,
	"./is.js": 226,
	"./it": 227,
	"./it.js": 227,
	"./ja": 228,
	"./ja.js": 228,
	"./jv": 229,
	"./jv.js": 229,
	"./ka": 230,
	"./ka.js": 230,
	"./kk": 231,
	"./kk.js": 231,
	"./km": 232,
	"./km.js": 232,
	"./kn": 233,
	"./kn.js": 233,
	"./ko": 234,
	"./ko.js": 234,
	"./ky": 235,
	"./ky.js": 235,
	"./lb": 236,
	"./lb.js": 236,
	"./lo": 237,
	"./lo.js": 237,
	"./lt": 238,
	"./lt.js": 238,
	"./lv": 239,
	"./lv.js": 239,
	"./me": 240,
	"./me.js": 240,
	"./mi": 241,
	"./mi.js": 241,
	"./mk": 242,
	"./mk.js": 242,
	"./ml": 243,
	"./ml.js": 243,
	"./mr": 244,
	"./mr.js": 244,
	"./ms": 245,
	"./ms-my": 246,
	"./ms-my.js": 246,
	"./ms.js": 245,
	"./my": 247,
	"./my.js": 247,
	"./nb": 248,
	"./nb.js": 248,
	"./ne": 249,
	"./ne.js": 249,
	"./nl": 250,
	"./nl-be": 251,
	"./nl-be.js": 251,
	"./nl.js": 250,
	"./nn": 252,
	"./nn.js": 252,
	"./pa-in": 253,
	"./pa-in.js": 253,
	"./pl": 254,
	"./pl.js": 254,
	"./pt": 255,
	"./pt-br": 256,
	"./pt-br.js": 256,
	"./pt.js": 255,
	"./ro": 257,
	"./ro.js": 257,
	"./ru": 258,
	"./ru.js": 258,
	"./sd": 259,
	"./sd.js": 259,
	"./se": 260,
	"./se.js": 260,
	"./si": 261,
	"./si.js": 261,
	"./sk": 262,
	"./sk.js": 262,
	"./sl": 263,
	"./sl.js": 263,
	"./sq": 264,
	"./sq.js": 264,
	"./sr": 265,
	"./sr-cyrl": 266,
	"./sr-cyrl.js": 266,
	"./sr.js": 265,
	"./ss": 267,
	"./ss.js": 267,
	"./sv": 268,
	"./sv.js": 268,
	"./sw": 269,
	"./sw.js": 269,
	"./ta": 270,
	"./ta.js": 270,
	"./te": 271,
	"./te.js": 271,
	"./tet": 272,
	"./tet.js": 272,
	"./th": 273,
	"./th.js": 273,
	"./tl-ph": 274,
	"./tl-ph.js": 274,
	"./tlh": 275,
	"./tlh.js": 275,
	"./tr": 276,
	"./tr.js": 276,
	"./tzl": 277,
	"./tzl.js": 277,
	"./tzm": 278,
	"./tzm-latn": 279,
	"./tzm-latn.js": 279,
	"./tzm.js": 278,
	"./uk": 280,
	"./uk.js": 280,
	"./ur": 281,
	"./ur.js": 281,
	"./uz": 282,
	"./uz-latn": 283,
	"./uz-latn.js": 283,
	"./uz.js": 282,
	"./vi": 284,
	"./vi.js": 284,
	"./x-pseudo": 285,
	"./x-pseudo.js": 285,
	"./yo": 286,
	"./yo.js": 286,
	"./zh-cn": 287,
	"./zh-cn.js": 287,
	"./zh-hk": 288,
	"./zh-hk.js": 288,
	"./zh-tw": 289,
	"./zh-tw.js": 289
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 410;

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericController; });
var GenericController = /** @class */ (function () {
    function GenericController() {
    }
    GenericController.prototype.getCurrentUser = function () {
        return {
            name: 'nome',
            schedule: [[-8.05362071, -34.95265961, true], [-8.05352071, -34.95265961, false], [-8.05361071, -34.95264961, true]]
        };
    };
    return GenericController;
}());

//# sourceMappingURL=generic-controller.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sobre_sobre__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_5__pages_sobre_sobre__["a" /* SobrePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/app/app.html"*/'\n<!-- Definindo o menu -->\n\n<ion-menu [content]="content">\n    \n    <!-- Título do menu -->\n\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <!-- Lista que aparecerá quando o menu for aberto -->\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImovelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aedes_aedes__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_form_lira_form_lira__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ImovelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImovelPage = /** @class */ (function () {
    function ImovelPage(navCtrl, navParams, formLiraProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formLiraProvider = formLiraProvider;
        // Recebendo o objeto passado como parâmetro.
        this.visitInformation = this.navParams.get("parameter");
    }
    // Chamando a tela de aedes e passado o objeto visitInformation como parâmetro.
    ImovelPage.prototype.GotoAedesPage = function (visitParams) {
        // Passando o objeto visitInformation para próxima página.
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aedes_aedes__["a" /* AedesPage */], { visitParams: visitParams });
    };
    ImovelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImovelPage');
    };
    ImovelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-imovel',template:/*ion-inline-start:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/imovel/imovel.html"*/'<!--\n  Generated template for the ImovelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Imóvel\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-header>\n\n      <ion-input type="text" value="Nº 2059 Apartamento 101"></ion-input>\n\n    </ion-card-header>\n\n    <!--Select com o tipo do imovel-->\n    <ion-list>\n      <ion-item>\n        <ion-label>Tipo de Imóvel</ion-label>\n        <ion-select [(ngModel)]="visitInformation.houseType">\n          <ion-option value="1">Residência</ion-option>\n          <ion-option value="2">Comércio</ion-option>\n          <ion-option value="3">Indústria</ion-option>\n          <ion-option value="3">Serviço Privado</ion-option>\n          <ion-option value="3">Residência Com</ion-option>\n          <ion-option value="3">Imóvel em Construção</ion-option>\n          <ion-option value="4">Terreno Baldio</ion-option>\n          <ion-option value="3">Ponto Estratégico</ion-option>\n          <ion-option value="3">Outros</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <!--Select com o tipo da situação-->\n    <ion-list>\n      <ion-item>\n        <ion-label>Situação</ion-label>\n        <ion-select [(ngModel)]="visitInformation.houseSituation"> \n          <ion-option value="1">Inspecionado</ion-option>\n          <ion-option value="2">Não Inspecionado</ion-option>\n          <ion-option value="3">Recuperado</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <!--Data da visita -->\n    <ion-item>\n      <ion-label>Data</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="visitInformation.dateVisit"></ion-datetime>\n    </ion-item>\n\n    <!-- Ovitrampas -->\n    <ion-item>\n      <ion-label>Ovitrampas: </ion-label>\n      <ion-input type="text" ></ion-input>\n    </ion-item>\n\n    <!-- Formularios -->\n\n    <ion-list>\n\n      <!-- Função que chama o formulario a ser preenchido -->\n      <button ion-item (click)="GotoAedesPage(visitInformation)">\n        <ion-icon name="Formulário" item-start></ion-icon>\n        Formulário 1 - Índice LIRAa\n      </button>\n\n      <button ion-item class="button_settings">\n        <ion-icon color="danger" name="Form" item-start></ion-icon>\n        Formulário 2 - PSA\n      </button>\n\n    </ion-list>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/anderson/Documentos/Projetos/GeoSaude-App/src/pages/imovel/imovel.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_form_lira_form_lira__["a" /* FormLiraProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_form_lira_form_lira__["a" /* FormLiraProvider */]) === "function" && _c || Object])
    ], ImovelPage);
    return ImovelPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=imovel.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLiraProvider; });
/* unused harmony export DepositsGrams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VisitInformation; });
/* unused harmony export LocaleList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(35);
/*********************************************************************************************
  Provider FormLira

    Criado para realizar as operações de armazenamento de dados local utilizando o Storage.
    Neste provider será realizado o CRUD (Create, Read, Update e Delete) dos dados.

    Data de Criação: 25/03/2018

**********************************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http } from '@angular/http';



var FormLiraProvider = /** @class */ (function () {
    function FormLiraProvider(storage, datePipe) {
        this.storage = storage;
        this.datePipe = datePipe;
        console.log('Hello FormularioLiraProvider Provider');
    }
    // Método insert insere uma nova visita  
    FormLiraProvider.prototype.insert = function (visitInsert) {
        // Gera a chave do campo a ser inserido
        var key = this.datePipe.transform(new Date(), "ddMMyyyyHHmmss");
        // Chama o método que concretiza a inserção
        return this.save(key, visitInsert);
    };
    // Update realiza a atualização em algum campo da visita realizada
    FormLiraProvider.prototype.update = function () {
    };
    // Save vai realizar a inserção na estrutura do Storage
    FormLiraProvider.prototype.save = function (key, visitSave) {
        return this.storage.set(key, visitSave);
    };
    FormLiraProvider.prototype.remove = function () {
    };
    // getAll retorna todos os objetos que estão armazenados no storage
    FormLiraProvider.prototype.getAll = function () {
        var places = [];
        return this.storage.forEach(function (value, key, iterationNumber) {
            var loc = new LocaleList();
            loc.key = key;
            loc.visitInfo = value;
            places.push(loc);
        })
            .then(function () {
            return Promise.resolve(places);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    FormLiraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _b || Object])
    ], FormLiraProvider);
    return FormLiraProvider;
    var _a, _b;
}());

/*
  Class DepositsGrams: criada para ser utilizada pela classe FormInfo, pelos atributos wdg e btiG.

  Class FormInfo: contém as informações que serão preenchidas no formulário.
*/
var DepositsGrams = /** @class */ (function () {
    function DepositsGrams() {
    }
    return DepositsGrams;
}());

/*
  Class VisitInformation: contém as informações referentes às visitas realizadas.
*/
var VisitInformation = /** @class */ (function () {
    function VisitInformation() {
    }
    return VisitInformation;
}());

/*
  Class LocateList: classe que faz a convergência entre as outras classes. Será por está classe
                    a manipulação da estrutura de armazenamento.
*/
var LocaleList = /** @class */ (function () {
    function LocaleList() {
    }
    return LocaleList;
}());

/*
  

  var streets: string[][] = [
    [
      'Rua Marquês de Baipendi'*/
/*'Rua Cirilino Afonso de Melo',
'Rua Mario Sete',
'Rua São Caetano',
'Av Agamenon Magalhães',
'Rua Guaianazes',
'Rua Esberard',
'Rua Pereira Passos',
'Rua Nova',
'Rua Projetada',
'Rua Ledinha'*/
/*  ],
  [
    'Nº 2059 Apartamento 101',
    'Nº 2059 Apartamento 102',
    'Nº 2058 Apartamento 106'
  ]
]
*/
/*
  Generated class for the FormularioLiraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//# sourceMappingURL=form-lira.js.map

/***/ })

},[334]);
//# sourceMappingURL=main.js.map