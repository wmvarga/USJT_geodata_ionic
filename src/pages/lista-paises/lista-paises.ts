import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePaisPage } from '../detalhe-pais/detalhe-pais';
import { Pais } from '../../model/Pais';
import { PaisProvider } from '../../providers/pais/pais';

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
  providers: [
    PaisProvider
  ]
})
export class ListaPaisesPage {

  public paises = new Array<any>();
  public continente: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private paisProvider: PaisProvider) {
    
    this.continente = navParams.get("continente");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPaisesPage');
    this.paisProvider.buscarPaises(this.continente).subscribe(
      data => {
        const response = (data as any);
        this.paises = JSON.parse(response._body);
      }, error => {
        console.log(error);
      }
    );
  }

  detalhePais(pais: Pais) {
    this.navCtrl.push(DetalhePaisPage, {"pais": pais});
  }

}
