import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DOGS } from '../../assets/DOGS';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  dogs = DOGS;
  results = DOGS.results;

  constructor(
    public navCtrl: NavController,) {
  }

  seeResults(i) {
    this.navCtrl.push(ResultsPage, {test: this.results[i]});
  }
 

}

