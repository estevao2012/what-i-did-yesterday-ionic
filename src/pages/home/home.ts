import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private databseObject: SQLiteObject;
  private todo = {
    title: '',
    description: '',
    labels: ''
  };

  constructor(app: App, menu: MenuController, private database: SQLite) {
    menu.enable(true);

    this.database.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.databseObject = db;
    }).catch(e => console.log(e));
  }

  public submitForm(){
    console.log(this.todo.title);
    console.log(this.todo.description);
    console.log(this.todo.labels);

    console.log(" INSERE NO BANCO PORRA");
    this.databseObject.executeSql("INSERT INTO task (title, labels, description) VALUES ('" + this.todo.title + "', '"+ this.todo.labels +"', '"+ this.todo.description +"')", []).then((data) => {
        console.log("INSERTED: " + JSON.stringify(data));
    }, (error) => {
        console.log("ERROR: " + JSON.stringify(error.err));
    });
  }
}
