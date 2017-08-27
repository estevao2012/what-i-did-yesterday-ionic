import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage:any = HomePage;
  public homePage     = HomePage;
  public tasksPage    = TasksPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private sqlite: SQLite) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('create table IF NOT EXISTS task(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(32), labels TEXT, description TEXT)', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      }).catch(e => console.log(e));
    });
  }

  openPage(page) {
    this.nav.push(page);
  }

  closeMenu(){}
}

