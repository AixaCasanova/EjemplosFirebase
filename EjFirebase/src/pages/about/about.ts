import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  dato: FirebaseListObservable<any[]>;
  persona={
    nombre:"",
    edad:""
  };

  constructor(public navCtrl: NavController, af: AngularFireDatabase) {
     
  }

  agregarPersona()
  {}
}
