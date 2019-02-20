import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoencasPage } from './doencas';

@NgModule({
  declarations: [
    DoencasPage,
  ],
  imports: [
    IonicPageModule.forChild(DoencasPage),
  ],
})
export class DoencasPageModule {}
