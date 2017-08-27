import { Component } from '@angular/core';
import { App, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the TasksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, app: App, menu: MenuController) {
    menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

}
