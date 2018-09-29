import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DOGS } from '../../assets/DOGS';

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  test: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.test = navParams.get('test');
      // this.navParams.get('test').then((val)=>{
      //   var test = JSON.parse(val);
      //   console.log(test);
      // })
    }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    
  }

}
