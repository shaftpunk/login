import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private aFauth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  back(){
    this.navCtrl.push('LoginPage');
  }

  async signup(user: User){
    try {
    const result = await this.aFauth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password)
    console.log(result);
  }
  catch(e){
    console.error(e);
  }

}
}
