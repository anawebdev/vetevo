import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TruncateModule } from '@yellowspot/ng-truncate';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  test: any;
  shownGroup = null;
  limit: number = 300;
  truncating = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.test = navParams.get('test');
      // console.log(this.test.recommendation);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    
  }

  toggleGroup(group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        } else {
            this.shownGroup = group;
        }
    };
    isGroupShown(group) {
        return this.shownGroup === group;
  };

}
