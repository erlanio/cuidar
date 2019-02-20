import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcurarmedicoPage } from './procurarmedico';

@NgModule({
  declarations: [
    ProcurarmedicoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcurarmedicoPage),
  ],
})
export class ProcurarmedicoPageModule {}
