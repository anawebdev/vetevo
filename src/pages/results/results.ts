import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';

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
  url: string = 'https://vetevo.de/';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private call: CallNumber,
    private inAppBrowser: InAppBrowser,
    private emailComposer: EmailComposer) {

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

  callNumber(){
    this.call.callNumber("40747754797", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  openWebpage(url: string) {
    const browser = this.inAppBrowser.create(url, '_target');;
  }

  sendEmail(){

    let email = {
      to: 'test@test.de',
      cc: 'test@test.de',
      bcc: ['test@test.com', 'test@test.com'],
      subject: 'Test',
      body: 'Test',
      isHtml: true
    };

    this.emailComposer.open(email);
    // this.emailComposer.isAvailable().then((available: boolean) =>{
    //   if(available) {
    //     this.emailComposer.open(email);
    //   }
    //  });
  }
  
  

}
