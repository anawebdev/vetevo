import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { CallNumber } from '@ionic-native/call-number';


@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
    TruncateModule,
  ],
  providers: [
    CallNumber
  ]
})
export class ResultsPageModule {}
