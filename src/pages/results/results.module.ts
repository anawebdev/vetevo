import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import { TruncateModule } from '@yellowspot/ng-truncate';


@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
    TruncateModule,
  ]
})
export class ResultsPageModule {}
