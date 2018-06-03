import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject }	from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public db: SQLite) {
    
  }

  openDatabase() {
    return this.db.create({
      name: "paises.db",
      location: "default"
    });
  }

  createDatabase() {
    return this.openDatabase().
    then((db: SQLiteObject) => {
      this.createTabelaPais(db);
    });
  }

  createTabelaPais(db: SQLiteObject) {
    let sql: string =  "CREATE TABLE IF NOT EXISTS pais (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, codigo3 TEXT, capital TEXT, regiao TEXT, subRegiao TEXT, demonimo TEXT, populacao INTEGER, area INTEGER, gini DOUBLE, latitude DOUBLE, longitude DOUBLE)";
    db.executeSql(sql, {});
    console.log("createTabelaPaises");
  }

}
