import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePaisPage } from '../detalhe-pais/detalhe-pais';
import { Pais } from '../../model/Pais';
import { PaisProvider } from '../../providers/pais/pais';
import { PaisDbProvider } from '../../providers/pais-db/pais-db';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private paisProvider: PaisProvider, private paisDbProvider: PaisDbProvider) {
    
    this.continente = navParams.get("continente");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPaisesPage');

    // Um século procurando depois..
    if (navigator.onLine) {
      console.log("Tem internet, buscando REST/JSON..");
      // Se tem internet, busca REST
      this.paisProvider.buscarPaises(this.continente).subscribe(
        data => {
          const response = (data as any);
          this.paises = JSON.parse(response._body);
        }, error => {
          console.log(error);
        }
      );
      // E insere no SQLite os países buscados
      this.paisDbProvider.inserirPaises(this.paises);
    } else {
      console.log("Não tem internet, buscando no SQLite..");
      // Busca no SQLite
      this.paisDbProvider.listarPaises().then((paises: Pais[]) => {
        this.paises = paises;
      });
    }
    
    
  }

  detalhePais(pais: Pais) {
    this.navCtrl.push(DetalhePaisPage, {"pais": pais});
  }

}
