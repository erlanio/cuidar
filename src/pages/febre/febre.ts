import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CriancacomfebrePage } from '../criancacomfebre/criancacomfebre';
import { NiveldefebrePage } from '../niveldefebre/niveldefebre';
import { RecomendacoesPage } from '../recomendacoes/recomendacoes';
/**
* Generated class for the FebrePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-febre',
  templateUrl: 'febre.html',
})
export class FebrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FebrePage');
  }


  niveldefebre(){
    this.navCtrl.push(NiveldefebrePage,
      {

      });
    }

    criancacomfebre(){
      this.navCtrl.push(CriancacomfebrePage,
        {

        });
      }


      recomendacoes(){
        this.navCtrl.push(RecomendacoesPage,
          {

          });
        }

      }
