import { Injectable } from '@angular/core';

import { DatabaseProvider }	from '../database/database';
import { Pais } from '../../model/Pais';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the PaisDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaisDbProvider {

  constructor(public dbProvider: DatabaseProvider) {
    console.log('Hello PaisDbProvider Provider');
  }

  public inserirPaises(paises: Pais []){
    return this.dbProvider.openDatabase().
    then((db: SQLiteObject) => {
      let sql = "INSERT INTO pais (nome, codigo3, capital, regiao, subRegiao, demonimo, populacao, area, gini, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      paises.forEach(function (pais) {
        let parametros = [pais.name, pais.alpha3Code, pais.capital, pais.region, pais.subregion, pais.demonym, pais.population, pais.area, pais.gini, pais.latlng[0], pais.latlng[1]];
        db.executeSql(sql, parametros).
        catch((e) => {
          console.log(e);
        });
      });
    }).catch((e) => {
      console.log(e);
    });
  }

  public listarPaises() {
    return this.dbProvider.openDatabase().
    then((db: SQLiteObject) => {
      let sql = "SELECT * FROM pais";
      return db.executeSql(sql, []).
      then((data: any) => {
        if (data.rows.length > 0){
          let paises: Pais[] = [];
          for (let i = 0; i < data.rows.length; i++) {
            paises.push(data.rows.item(i));
          }
          return paises;
        }
        else return [];
      });
    }).catch((e) => {
      console.log(e);
    });
  }

}
