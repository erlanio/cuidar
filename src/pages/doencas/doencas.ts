import { TemelevadaPage } from '../temelevada/temelevada';
import { CriancacomfebrePage } from '../criancacomfebre/criancacomfebre';
import { FebrePage } from '../febre/febre';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoencasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doencas',
  templateUrl: 'doencas.html',
})
export class DoencasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoencasPage');
  }

  criancacomfebre(){
    this.navCtrl.push(FebrePage,
      {

      });
    }


}
