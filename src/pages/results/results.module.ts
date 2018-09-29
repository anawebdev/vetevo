import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DOGS } from '../../assets/DOGS';
import { ResultsPage } from './results';

@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
  ]
})
export class ResultsPageModule {}
