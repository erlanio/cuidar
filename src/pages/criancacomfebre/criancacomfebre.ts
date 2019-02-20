import { ProcurarmedicoPage } from '../procurarmedico/procurarmedico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-criancacomfebre',
  templateUrl: 'criancacomfebre.html',
})
export class CriancacomfebrePage {
  public tempelevada:any;
  public sinaisAlerta:any;
  public tratamento:any;
  public tratnfarmacologico:any;
  public tratfarmacologico:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sinaisAlerta = false
    this.tempelevada = false;
    this.tratamento = false;
    this.tratnfarmacologico = false;
    this.tratfarmacologico = false;
  }

  procurarmedico(){
    this.navCtrl.push(ProcurarmedicoPage,
      {

      });
    }

    tempelevadaClick(){
      this.tempelevada = true;
    }

    sinaisAlertaClick(){
      this.sinaisAlerta = true;
    }

    tratamentoClick(){
      this.tratamento = true;
    }

    nfarma(){
      this.tratnfarmacologico = true;
      this.tratfarmacologico = false;
    }

    farma(){
      this.tratfarmacologico = true;
      this.tratnfarmacologico = false;
    }


  }
