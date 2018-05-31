import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePaisPage } from '../detalhe-pais/detalhe-pais';
import { Pais } from '../../model/Pais';

/**
 * Generated class for the ListaPaisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-paises',
  templateUrl: 'lista-paises.html',
})
export class ListaPaisesPage {

  public paises: Pais [];
  public continente: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.continente = navParams.get("continente");
    var bra = {
      nome: "Brazil",
      regiao: "Americas",
      capital: "Brasília",
      codigo3: "BRA",
      subRegiao: "BRA",
      demonimo: "b",
      populacao: 15000,
      area: 5000000,
      gini: 55,
      latitude: 26.2,
      longitude: 62.5
    };
    var kor = {
      nome: "Korea (Republic of)",
      regiao: "Asia",
      capital: "Seoul",
      codigo3: "KOR",
      subRegiao: "KOR",
      demonimo: "k",
      populacao: 1332,
      area: 51325,
      gini: 53,
      latitude: 53.2,
      longitude: 17.9
    };
    var jpn = {
      nome: "Japan",
      regiao: "Asia",
      capital: "Tokyo",
      codigo3: "JPN",
      subRegiao: "JPN",
      demonimo: "j",
      populacao: 53445,
      area: 63234,
      gini: 17,
      latitude: 93.2,
      longitude: 15.5
    };
    var hun = {
      nome: "Hungary",
      regiao: "Europe",
      capital: "Budapest",
      codigo3: "HUN",
      subRegiao: "HUN",
      demonimo: "h",
      populacao: 1332,
      area: 55521,
      gini: 77,
      latitude: 89.2,
      longitude: 30.3
    };
    this.paises = [bra, kor, jpn, hun];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPaisesPage');
  }

  detalhePais(pais: Pais) {
    this.navCtrl.push(DetalhePaisPage, {"pais": pais});
  }

}
