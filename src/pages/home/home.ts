import { DoencasPage } from '../doencas/doencas';
import { DesenvolvedoresPage } from '../desenvolvedores/desenvolvedores';
import { SobrePage } from '../sobre/sobre';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform) {

  }

  doencas(){
    this.navCtrl.push(DoencasPage,
      {

      });
    }

    sobre(){
      this.navCtrl.push(SobrePage,
        {

        });
      }

      desenvolvedores(){
        this.navCtrl.push(DesenvolvedoresPage,
          {

          });
        }

      sair(){
        this.platform.exitApp();
      }

    }
