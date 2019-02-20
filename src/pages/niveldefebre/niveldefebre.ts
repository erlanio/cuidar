import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the NiveldefebrePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-niveldefebre',
  templateUrl: 'niveldefebre.html',
})
export class NiveldefebrePage {
  public nivel1:any;
  public nivel2:any;
  public nivel3:any;
  public nivel4:any;
  public nivel5:any;
  public temperatura:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nivel1 = false
    this.nivel2 = false
    this.nivel3 = false
    this.nivel4 = false
    this.nivel5 = false
  }

  verificar(){
    if(this.temperatura.replace(",", ".") >= 41){
      this.nivel1 = true;
      this.nivel2 = false
      this.nivel3 = false
      this.nivel4 = false
      this.nivel5 = false
    }else if(this.temperatura.replace(",", ".") >= 39.5 && this.temperatura.replace(",", ".") < 41){
      this.nivel1 = false
      this.nivel2 = true;
      this.nivel3 = false
      this.nivel4 = false
      this.nivel5 = false
    }else if(this.temperatura.replace(",", ".") >= 37.5 && this.temperatura.replace(",", ".") < 39.5){
      this.nivel1 = false
      this.nivel2 = false
      this.nivel3 = true;
      this.nivel4 = false
      this.nivel5 = false
    }else if(this.temperatura.replace(",", ".") >= 36 && this.temperatura.replace(",", ".") < 37.5){
      this.nivel1 = false
      this.nivel2 = false
      this.nivel3 = false;
      this.nivel4 = true;
      this.nivel5 = false
    }else{
      this.nivel1 = false
      this.nivel2 = false
      this.nivel3 = false
      this.nivel4 = false
      this.nivel5 = true
    }
  }


}
