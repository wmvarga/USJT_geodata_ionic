import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaPaisesPage } from '../lista-paises/lista-paises';
import { Continente } from '../../model/Continente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public continentes: Continente [];
  public continenteSelecionado: string;

  constructor(public navCtrl: NavController) {

    var all = {nome: 'Todos', valor: 'all'};
    var africa = {nome: 'Africa', valor: 'africa'};
    var americas = {nome: 'Américas', valor: 'americas'};
    var asia = {nome: 'Ásia', valor: 'asia'};
    var europe = {nome: 'Europa', valor: 'europe'};
    var oceania = {nome: 'Oceania', valor: 'oceania'};

    this.continentes = [all, africa, americas, asia, europe, oceania];

    this.continenteSelecionado = this.continentes[0].valor;

  }

  listarPaises() {
    this.navCtrl.push(ListaPaisesPage, {"continente": this.continenteSelecionado});
  }

}
